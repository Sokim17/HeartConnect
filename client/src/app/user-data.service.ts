import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users/users.component';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  // baseUrl: string = "https://localhost:7255/api/users";
  baseUrl: string = environment.UserApiUrl;
  
  public getUsers():Observable<User[]>{
    const url:string = this.baseUrl;
    return this.http.get<User[]>(url);
  }
  
  public getOneUser(id:string):Observable<User>{
    const url:string = this.baseUrl + "/" + id;
    return this.http.get<User>(url);
  }
  
}
