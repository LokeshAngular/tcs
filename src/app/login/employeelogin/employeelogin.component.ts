import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.scss']
})
export class EmployeeloginComponent implements OnInit {
  employeeLoginForm!:FormGroup;
  empLoginDynamicArray:any=[];
  constructor(private ls:LoginService,
    private fb:FormBuilder,
    private route:Router) { }

  ngOnInit(): void {
    this.employeeLoginForm=this.fb.group({

    })
    this.getLogInForm();
  }

  getLogInForm(){
    this.ls.formControls().subscribe(
      res=>{
         this.empLoginDynamicArray=res;
         this.createRegFormControls();
         console.log(this.empLoginDynamicArray);
      }
    )
  }

  createRegFormControls(){
    this.empLoginDynamicArray.forEach((element:any) => {
      this.employeeLoginForm.addControl(element.ID,new FormControl(''));
    });
     console.log(this.employeeLoginForm);  
  }

  Login(){
    this.ls.LoginEmp().subscribe(
      res=>{
        console.log(res); 
        const empLogin = res.find((a:any)=>{
          return a.Email === this.employeeLoginForm.value.Email && a.Password === this.employeeLoginForm.value.Password;
        })
        console.log(empLogin);
        if(empLogin){
          alert('loginSucess');
          // this.employeeLoginForm.reset();
          localStorage.setItem("empEmail",empLogin.Email);
          localStorage.setItem("empPassword",empLogin.Password);
          localStorage.setItem("empId",empLogin.id);
          this.route.navigate(['/dashboard']);
        }
      }
    )
  }
}
