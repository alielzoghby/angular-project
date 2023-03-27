import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.css'],
})
export class ChangeThemeComponent {
  constructor(private _data: DataService) {}

  changeThems(num: number) {
    this._data.setTheme(num);
  }
}
