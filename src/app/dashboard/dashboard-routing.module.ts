import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminGuard } from '../admin.guard';
import { AdmindataComponent } from '../data/admindata/admindata.component';
import { EmployeedataComponent } from '../data/employeedata/employeedata.component';
import { DataComponent } from '../data/data.component';
// import { DataComponent } from './data/data.component';



const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AdminGuard], children: [
      {path:"data",component:DataComponent},
      // { path: 'adminData', component: AdmindataComponent },
      { path: 'empData', component: EmployeedataComponent },
    ]
  },
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
