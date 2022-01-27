import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IssData } from 'src/app/issData';
import { getTimestamp } from 'src/app/shared/utils/utils';
import { IssDetailsService } from '../iss-details/iss-details.service';

@Injectable({
  providedIn: 'root'
})
export class IssApiService {
  private issUrl = 'https://api.wheretheiss.at/v1/satellites/25544/positions?';
  private apiKeyMapRequest = 'IdanARP18ulZTG83ynxmpAf4h2oT5bLW';
  private coordinatesUrl = `https://www.mapquestapi.com/staticmap/v5/map?key=${this.apiKeyMapRequest}&center=`;


  constructor(
    private http: HttpClient,
    private issDetails: IssDetailsService,
  ) { }

  findIss(issData: IssData): Observable<any> {
    return this.http.get<JSON>(this.issUrl, {
      params: {
        timestamps: getTimestamp(issData.dateTime),
        units: issData.altitude
      }
    }).pipe(
        tap(_ => this.issDetails.setIssData(issData, _)),
        finalize(() => console.log('Iss found')),
        catchError(() => of([{}]))
      );
  }

  findIssByCoordinates(latitude: number, longitude: number): Observable<string> {
    return new Observable((subscriber) => {
      subscriber.next(`${this.coordinatesUrl}${latitude},${longitude}&zoom=10&size=800,500@2x`);
    });
  }
}
