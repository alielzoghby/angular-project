import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  theme!: any;
  login: boolean = true;
  signUp: boolean = false;
  str: string = 'Todo';

  constructor(private _data: DataService) {
    this._data.them$.subscribe((res) => {
      this.theme = res;
    });
  }

  goLogin() {
    this.str = 'Login';
    this.login = true;
    this.signUp = false;
  }
  goSignup() {
    this.str = 'Sign up';
    this.login = false;
    this.signUp = true;
  }
  getThemeData(data: number) {
    this.theme = data;
  }
}
