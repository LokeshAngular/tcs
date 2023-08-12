import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { AdmindataComponent } from '../data/admindata/admindata.component';
import { EmployeedataComponent } from '../data/employeedata/employeedata.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    // AdmindataComponent,
    // EmployeedataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
