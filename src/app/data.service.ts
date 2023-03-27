import { Injectable } from '@angular/core';
import { Todo } from './todos';
import { BehaviorSubject } from 'rxjs';

type Id = { id: number };

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any = localStorage.getItem('todos');
  todos: Todo[] = JSON.parse(this.data) || [];

  dataids: any = localStorage.getItem('ids');
  ids: Id[] = JSON.parse(this.dataids) || [];

  id: number = 0;
  userId!: number;
  isLogged: boolean = false;
  todosForUser!: Todo[];
  per!: number;

  theme = new BehaviorSubject(1);
  them$ = this.theme.asObservable();

  constructor() {}

  loged() {
    this.isLogged = !this.isLogged;
    this.todosForUser = this.todos.filter((el) => el.userID == this.userId);
    this.sum();
  }

  sum() {
    this.per =
      Math.floor(
        (this.todosForUser[0].completed.length * 100) /
          this.todosForUser[0].todos.length
      ) || 0;
  }

  logout() {
    this.isLogged = !this.isLogged;
  }

  setUserId(userID: number) {
    this.userId = userID;
  }

  setTheme(nu: number): void {
    this.theme.next(nu);
  }

  addTodo(textFeild: string): void {
    if (textFeild) {
      this.ids[this.userId].id++;
      this.todos[this.userId].todos.push({
        id: this.ids[this.userId].id,
        title: textFeild,
        complet: false,
        favourite: false,
        details: '',
      });
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('ids', JSON.stringify(this.ids));
  }

  removeTodo(index: number, id: number): void {
    if (this.todos[this.userId].deleted.find((el) => el.id == id)) {
      return;
    }

    if (index !== -1) {
      // add to deleted array
      this.todos[this.userId].deleted.push(
        this.todos[this.userId].todos[index]
      );

      // delete from favourie Array
      if (this.todos[this.userId].favourite.find((el) => el.id == id)) {
        let i = this.todos[this.userId].favourite.indexOf(
          this.todos[this.userId].todos[index]
        );
        this.todos[this.userId].favourite.splice(i, 1);
      }

      // delete from complete Array

      if (this.todos[this.userId].completed.find((el) => el.id == id)) {
        let i = this.todos[this.userId].completed.indexOf(
          this.todos[this.userId].todos[index]
        );
        this.todos[this.userId].completed.splice(i, 1);
      }

      ////delete from todo array
      this.todos[this.userId].todos.splice(index, 1);
    }

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(index: number): void {
    if (index != -1) {
      this.todos[this.userId].deleted.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  combleteTodo(index: number, id: number): void {
    this.todos[this.userId].todos[index].complet =
      !this.todos[this.userId].todos[index].complet;

    if (this.todos[this.userId].completed.find((el) => el.id == id)) {
      let i = this.todos[this.userId].completed.indexOf(
        this.todos[this.userId].todos[index]
      );
      this.todos[this.userId].completed.splice(i, 1);
    } else {
      this.todos[this.userId].completed.push(
        this.todos[this.userId].todos[index]
      );
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.sum();
  }

  favouriteTodo(index: number, id: number): void {
    this.todos[this.userId].todos[index].favourite =
      !this.todos[this.userId].todos[index].favourite;

    if (this.todos[this.userId].favourite.find((el) => el.id == id)) {
      let i = this.todos[this.userId].favourite.indexOf(
        this.todos[this.userId].todos[index]
      );
      this.todos[this.userId].favourite.splice(i, 1);
    } else {
      this.todos[this.userId].favourite.push(
        this.todos[this.userId].todos[index]
      );
    }

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  returnToTodo(index: number) {
    this.todos[this.userId].todos.push(this.todos[this.userId].deleted[index]);
    this.todos[this.userId].deleted.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodoById(i: any) {
    return [this.todos[this.userId].todos[i]];
  }

  saveDetails(str: string, index: any) {
    this.todos[this.userId].todos[index].details = str;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
