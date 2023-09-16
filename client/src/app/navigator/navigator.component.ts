import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit{
  model:any = {}
  constructor(){}
  ngOnInit(): void {

  }
  login(){
    console.log(this.model);
    
  }
}
