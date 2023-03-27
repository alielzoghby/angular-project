import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  theme!: number;
  completed!: any;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _data: DataService
  ) {
    this._data.them$.subscribe((res) => {
      this.theme = res;
    });
    this.completed = this._data.todosForUser[0].completed;
  }
  setTheme(nu: number) {
    this.theme = nu;
    this._data.setTheme(nu);
  }
  getThemeData(data: number) {
    this.theme = data;
  }
}
