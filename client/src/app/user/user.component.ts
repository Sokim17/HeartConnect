import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User } from '../users/users.component';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  user!:User;
  
  constructor(private _userService:UserDataService, private _route:ActivatedRoute ){
  }

  userId = this._route.snapshot.params["id"];

  ngOnInit(): void {
    this.getOneUser(this.userId);
  }

  getOneUser(id:string):void{
    this._userService.getOneUser(id).subscribe({
      next: response => this.user = response,
      error: err => console.log(err),
      complete: () => console.log("GetOneUser Request has completed.")
    })
  }
}
