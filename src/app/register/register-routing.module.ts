import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'adminRegister', component: AdminregisterComponent},
  { path: 'employeeRegister', component: EmployeeregisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
