import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent {
  theme!: number;
  i: any;
  todo: any;
  text!: string;
  constructor(
    private _data: DataService,
    private _activateRoute: ActivatedRoute
  ) {
    this._data.them$.subscribe((res) => {
      this.theme = res;
      this.i = this._activateRoute.snapshot.params['id'];

      this.todo = [this._data.todos[0].todos[Number(this.i)]];
      this.text = this.todo[0].details;
    });
  }
  save() {
    this._data.saveDetails(this.text, this.i);
  }
}
