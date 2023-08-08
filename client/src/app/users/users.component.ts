import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../user-data.service';

export class User{
  #_id!:string;
  #userName!:string;

  get id():string{
    return this.#_id;
  }
  get userName():string{
    return this.#userName;
  }
  constructor(id:string, userName:string){
    this.#_id = id;
    this.#userName = userName;
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users!: User[];

  constructor(private _userService:UserDataService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers():void{
    this._userService.getUsers().subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      complete: () => console.log("GetAllUsers Request has completed.")
    });
  }
}
