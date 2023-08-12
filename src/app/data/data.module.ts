import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule,} from './data-routing.module';
import { DataComponent } from './data.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdmindataComponent } from './admindata/admindata.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';


@NgModule({
  declarations: [
    DataComponent,
    AdmindataComponent,
    EmployeedataComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgbModule
  ]
})
export class DataModule { }
