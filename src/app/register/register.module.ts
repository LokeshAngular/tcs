import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RegisterComponent,
    AdminregisterComponent,
    EmployeeregisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class RegisterModule { }
