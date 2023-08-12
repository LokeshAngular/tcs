import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrls: ['./employeeregister.component.scss']
})
export class EmployeeregisterComponent {
  registerForm!: FormGroup;
  dynamicFormArray: any = [];
  constructor(private registerService:RegisterService , private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({

    })
    this.formControls();
  }
  //step1 getformcontrols
  formControls() {
    this.registerService.empFormControls().subscribe(res => {
      this.dynamicFormArray = res;
      this.createFormControls();
      console.log(this.dynamicFormArray);
    })
  }
  //createformcontrols 
  createFormControls() {
    this.dynamicFormArray.forEach((element: any) => {
      this.registerForm.addControl(element.ID, new FormControl(''))
    });
    console.log(this.registerForm);
  }

  //  postseekardata
  Onclick(){
    this.registerService.RegisterEmp(this.registerForm.value).subscribe(
      res=>{
        console.log(res);
      }
    ) 
  }
}
