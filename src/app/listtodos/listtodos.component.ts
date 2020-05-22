import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description:string,
    public done:boolean,
    public targetDate: Date
  ){
   

  }
} 

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {

  todos=[
    new Todo(1,'Learn dance',false,new Date()),
    new Todo(2,'Be nice',true,new Date()),
    new Todo(3,'Go to shop',true,new Date())

  ]
  

  constructor() { }

  ngOnInit() {
  }

}
