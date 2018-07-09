import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tempindexvalue(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
  name = 'kenny';
  todoInput:' ';
  Todos= [ ];
  deleteSelect= '';
createTodo() {
  this.Todos.push(this.todoInput);
  this.todoInput = " ";

}
editTodo(chore) {
  console.log('chore was click:' + chore);
  let index = this.Todos.indexOf(chore);
  console.log('index of that chore:' 
+
index);
this.Todos[index] = prompt('please write a new todo')
}
deleteTodo(chore) {
  let index = this.Todos.indexOf(chore);
  this.Todos.splice(index, 1);
}

}
