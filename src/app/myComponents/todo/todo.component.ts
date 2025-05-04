import { Component, OnInit } from '@angular/core';
import { Todo } from "../../todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

   todos:Todo [];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: "Title0",
        desc: "Description",
        active: true
      },
      {
        id: 2,
        title: "Title1",
        desc: "Description",
        active: true
      },
      {
        id: 2,
        title: "Title2",
        desc: "Description",
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

}
