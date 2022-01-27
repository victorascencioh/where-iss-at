import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IssData } from 'src/app/issData';

@Injectable({
  providedIn: 'root'
})
export class IssDetailsService {
  issData = new Subject<IssData>();
  constructor() { }

  setIssData(issDetails: IssData, json: any) {
    this.issData.next({
      ...issDetails,
      location: json
    });
  }

}
