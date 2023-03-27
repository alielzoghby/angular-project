import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css'],
})
export class DeleteTodoComponent {
  @Input() todo: any;
  @Input() i!: number;

  todos!: Todo[];
  constructor(private _data: DataService) {
    this.todos = this._data.todos;
  }
  deleteTodo(index: number) {
    this._data.deleteTodo(index);
  }
  return(index: number){
    this._data.returnToTodo(index)
  }
}
