import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatMomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatDatepickerModule,
        MatMomentDateModule,
    ],
    exports: [
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatDatepickerModule,
        MatMomentDateModule,
    ]
})
export class MaterialModule {}