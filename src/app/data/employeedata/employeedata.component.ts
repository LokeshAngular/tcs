import { Component, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeregisterComponent } from 'src/app/register/employeeregister/employeeregister.component';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.scss']
})
export class EmployeedataComponent {
  // EmployeeData
  employeedata: any;
  empDatasourece: any;
  displayedempColumns: string[] = ['ID','FirstName', 'Email', "PhoneNumber", "Interests" ,'Gender'];
  empdialog: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dataService:DataService,private dialog: MatDialog){}

  ngOnInit(){
    this.empData();
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
    const popup = this.dialog.open(EmployeeregisterComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '50%',
      data: {
        usercode: code
      }
    });
    //once update the userrole refresh the list of user
    popup.afterClosed().subscribe((res:any) => {
      this.empData();
    });
  }

}
