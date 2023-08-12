import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  SideBarOpened = true;
  sideBar() {
   this.SideBarOpened = !this.SideBarOpened;
  }

}
