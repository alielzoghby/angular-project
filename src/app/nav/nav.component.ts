import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  todosForUser: Todo[];
  constructor(public _data: DataService, private _router: Router) {
    this.todosForUser = this._data.todosForUser;
  }

  logout() {
    this._data.logout();
    this._router.navigate(['/']);
  }
}
