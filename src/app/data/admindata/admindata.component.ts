import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminregisterComponent } from 'src/app/register/adminregister/adminregister.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admindata',
  templateUrl: './admindata.component.html',
  styleUrls: ['./admindata.component.scss']
})
export class AdmindataComponent implements OnInit {
  active=1
  // adminData
  admindata: any;
  adminDatasourece: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['ID','FirstName', 'LastName', 'Email',];
  
  // EmployeeData
  employeedata: any;
  empDatasourece: any;
  displayedempColumns: string[] = ['ID','FirstName', 'Email', "PhoneNumber", "Interests" ,'Gender'];
  empdialog: any;
  constructor(private dataService:DataService,private dialog: MatDialog){}

  ngOnInit(){
    this.adminData();
    this.empData();
  }

  adminData(){
    this.dataService.admin().subscribe(res=>{
      console.log(res); 
      this.admindata = res;
      this.adminDatasourece = new MatTableDataSource(this.admindata);
      this.adminDatasourece.paginator = this.paginator;
      this.adminDatasourece.sort = this.sort;
    })
  }

  empData(){
    this.dataService.employee().subscribe(res=>{
      console.log(res); 
      this.employeedata = res;
      this.empDatasourece = new MatTableDataSource(this.employeedata);
      this.empDatasourece.paginator = this.paginator;
      this.empDatasourece.sort = this.sort;
    })
  }
  

  
  
  ngAfterViewInit(): void {

  }
 

  updateuser(code: any) {
    this.OpenDialog('1000ms', '600ms', code);
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: string) {
    const popup = this.dialog.open(AdminregisterComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '50%',
      data: {
        usercode: code
      }
    });
    //once update the userrole refresh the list of user
    popup.afterClosed().subscribe((res:any) => {
      this.adminData();
    });
  }


}
