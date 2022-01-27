import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IssDetailsComponent } from './components/iss-details/iss-details.component';
import { SearchingIssComponent } from './components/searching-iss/searching-iss.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DATE_FORMATS_DEFAULT, DATE_FORMAT_LAST_OPTION, DATE_FORMAT_SECOND_OPTION } from './shared/date-format';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateFormatDirective } from './shared/date-format.directive';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IssDetailsComponent,
    SearchingIssComponent,
    DateFormatDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgxPrintModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS_DEFAULT },
    // { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_SECOND_OPTION },
    // { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_LAST_OPTION }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
