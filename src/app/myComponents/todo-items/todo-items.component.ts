import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../../todo";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo?: Todo;
  constructor() { }

  ngOnInit(): void {
  }
handleDelete(){
  console.log("delete");
}


}
