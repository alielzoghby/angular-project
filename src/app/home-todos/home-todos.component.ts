import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-home-todos',
  templateUrl: './home-todos.component.html',
  styleUrls: ['./home-todos.component.css'],
})
export class HomeTodosComponent {
  textFeild: string = '';
  todos!: Todo[];
  theme!: number;
  todosForUser!: Todo[];

  constructor(private _data: DataService) {
    this._data.them$.subscribe((res) => {
      this.theme = res;
    });
    this.todos = this._data.todos;
    this.todosForUser = this._data.todosForUser;
  }
  addToDo() {
    this._data.addTodo(this.textFeild);
  }
}
