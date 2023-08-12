import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   baseUrl = environment.api;
  constructor(private http:HttpClient) { }

  admin(){
   return this.http.get(`${this.baseUrl}/adminData`);
  }
  employee(){
   return this.http.get(`${this.baseUrl}/employeeData`);
  }
}
