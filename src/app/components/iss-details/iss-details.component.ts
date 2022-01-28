import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ALTITUDE_OPTIONS, ISS_FORM_TITLES, VELOCITY_OPTIONS } from 'src/app/forms/iss-form-group';
import { IssData } from 'src/app/issData';
import { IssApiService } from 'src/app/services/iss-api/iss-api.service';
import { IssDetailsService } from 'src/app/services/iss-details/iss-details.service';
import { convertKmToMiles, convertMilesToKm } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-iss-details',
  templateUrl: './iss-details.component.html',
  styleUrls: ['./iss-details.component.scss']
})

export class IssDetailsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'result'];
  dataSource: any[] = [];
  @Input() issDetails?: IssData;
  urlSafe?: SafeResourceUrl;
  constructor(
    private issDetailsService: IssDetailsService,
    private issApiService: IssApiService,
    private sanitizer: DomSanitizer) { }
    
  ngOnInit(): void {
    this.issDetailsService.issData.subscribe((data) => {
      this.setIssDetails(data);
    });
  }

  setIssDetails(data: IssData) {
    this.issDetails = data;    
    this.setIssDetailsTable();
    this.setMapUrl();
  }

  setIssDetailsTable() {
    this.dataSource = [
      { 
        name: ISS_FORM_TITLES.altitude, 
        result: `${this.issDetails?.location[0].altitude} ${this.issDetails?.altitude}`
      },
      { 
        name: ISS_FORM_TITLES.velocity,
        result: `${this.formatVelocityValue()} ${this.issDetails?.velocity}`
      },
      { 
        name: ISS_FORM_TITLES.time,
        result: formatDate(this.issDetails?.dateTime as Date, 'dd.MM.yyyy HH:MM:ss', 'en-DE'),
      },
      {
        name: 'latitude',
        result: `${this.issDetails?.location[0].latitude}`
      },
      {
        name: 'longitude',
        result: `${this.issDetails?.location[0].longitude}`,
      },
    ]
  }

  formatVelocityValue(): number {
    let velocity = this.issDetails?.location[0].velocity;
    if (this.issDetails?.altitude === ALTITUDE_OPTIONS.miles && 
        this.issDetails?.velocity === VELOCITY_OPTIONS.kmh) {
          velocity = convertMilesToKm(velocity);
    } else if (this.issDetails?.altitude === ALTITUDE_OPTIONS.kilometers && 
      this.issDetails?.velocity === VELOCITY_OPTIONS.mph){
        velocity = convertKmToMiles(velocity);
    }
    return velocity;
  }

  setMapUrl() {
    this.issApiService.findIssByCoordinates(
      this.issDetails?.location[0].latitude,
      this.issDetails?.location[0].longitude
    ).subscribe((result) => {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(result);
    });
  }
}
