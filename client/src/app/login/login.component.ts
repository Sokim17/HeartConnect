import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

export class Login{
  #username!:string;
  #password!:string;

  get username():string{
    return this.#username;
  }
  get password():string{
    return this.#password;
  }
  constructor(username:string, password:string){
    this.#username = username;
    this.#password = password;
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  model: any = {};
  isLoggedIn = false;
  constructor(private accountService:AccountService){}

  ngOnInit(): void {

  }

  login(){
    this.accountService.login(this.model).subscribe({
        next: response => {
          console.log(response);
          this.isLoggedIn = true;
        },
        error: error => console.log(error),
        complete: () => console.log('complete')
      })
    }
  }
