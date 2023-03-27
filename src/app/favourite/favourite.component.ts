import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent {
  theme!: number;
  favourite!: any;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _data: DataService
  ) {
    this._data.them$.subscribe((res) => {
      this.theme = res;
    });
    this.favourite = this._data.todosForUser[0].favourite;
  }
}
