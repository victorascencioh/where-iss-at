import { Component, OnInit } from '@angular/core';
import { IssFormGroup } from 'src/app/forms/iss-form-group';
import { IssData } from 'src/app/issData';
import { IssApiService } from 'src/app/services/iss-api/iss-api.service';

@Component({
  selector: 'app-searching-iss',
  templateUrl: './searching-iss.component.html',
  styleUrls: ['./searching-iss.component.scss']
})
export class SearchingIssComponent implements OnInit {
  issFG: IssFormGroup = new IssFormGroup();
  constructor(private issApiService: IssApiService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const issData: IssData = {
      ...this.issFG.value,
      dateTime: this.issFG.get('dateTime')?.value._d
    }

    console.log(this.issFG.get('dateTime')?.value);

    this.issApiService.findIss(issData).subscribe();
  }

}
