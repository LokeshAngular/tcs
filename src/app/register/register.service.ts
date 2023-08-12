import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = environment.api;
  constructor(private _http:HttpClient) { }

  formControls(): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/registerForm`);
  }

  RegisterAdmin(data: any) {
    return this._http.post<any>(`${this.baseUrl}/adminData`, data);
  }

  empFormControls(){
    return this._http.get<any>(`${this.baseUrl}/employeeRegister`);
  }

  RegisterEmp(data: any) {
    return this._http.post<any>(`${this.baseUrl}/employeeaData`, data);
  }
}
