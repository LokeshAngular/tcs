import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent  {
  AdminLoginForm!: FormGroup;
  admLoginDynamicArray: any = [];
  constructor(private ls: LoginService,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({

    })
    this.getLogInForm();
  }

  getLogInForm() {
    this.ls.formControls().subscribe(
      res => {
        this.admLoginDynamicArray = res;
        this.createRegFormControls();
        console.log(this.admLoginDynamicArray);

      }
    )
  }

  createRegFormControls() {
    this.admLoginDynamicArray.forEach((element: any) => {
      this.AdminLoginForm.addControl(element.ID, new FormControl(''));
    });
    console.log(this.AdminLoginForm);
  }

  Login() {
    this.ls.LoginAdmin().subscribe(
      res => {
        // console.log(res); 
        const AdminLogin = res.find((a: any) => {
          return a.Email === this.AdminLoginForm.value.Email && a.Password === this.AdminLoginForm.value.Password;
        })
        console.log(AdminLogin);
        if (AdminLogin) {
          alert('loginSucess');
          this.AdminLoginForm.reset();
          localStorage.setItem("adminEmail", AdminLogin.Email);
          localStorage.setItem("adminPassword", AdminLogin.Password);
          localStorage.setItem("adminId", AdminLogin.id);
          this.route.navigate(['/dashboard']);
        }
      }
    )
  }
}
