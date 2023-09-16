import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Login } from './login/login.component';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AccountService {

  // baseUrl: string = "https://localhost:7255/api/account";
  baseUrl: string = environment.LoginApiUrl;

  constructor(private http:HttpClient) { }

  public login(model:any):Observable<Login>{
    const url = this.baseUrl + "/login"; 
    return this.http.post<Login>(url, model);
  }

}
