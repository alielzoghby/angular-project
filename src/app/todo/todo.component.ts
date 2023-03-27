import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: any;
  @Input() i!: number;
  @Input() id!: number;
  favourite!: boolean;

  todos!: Todo[];

  constructor(private _data: DataService, private _router: Router) {
    this.todos = this._data.todos;
  }
  combleteTodo(index: number, id: number) {
    this._data.combleteTodo(index, id);
  }
  removeTodo(index: number, id: number) {
    this._data.removeTodo(index, id);
  }
  favouriteTodo(index: number, id: number) {
    this._data.favouriteTodo(index, id);
    this.favourite = !this.favourite;
  }
  navigateToDetails(i: number) {
    this._router.navigate(['todos/details', i]);
  }
}
