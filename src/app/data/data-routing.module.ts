import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { AdmindataComponent } from './admindata/admindata.component';

const routes: Routes = [
  // { path: '', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
