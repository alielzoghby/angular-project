import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  theme!: number;
  deleted!: any;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _data: DataService
  ) {
    this._data.them$.subscribe((res) => {
      this.theme = res;
    });
    this.deleted = this._data.todosForUser[0].deleted;
  }
}
