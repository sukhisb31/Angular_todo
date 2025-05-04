import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './myComponents/todo/todo.component';
import { TodoItemsComponent } from './myComponents/todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
