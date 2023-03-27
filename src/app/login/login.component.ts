import { NgIf } from '@angular/common';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
let s: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('wrong') myp!: HTMLElement;

  wrong: boolean = false;

  constructor(
    private _data: DataService,
    private _router: Router,
    private renderer: Renderer2
  ) {
    if (_data.isLogged) this._router.navigate(['todos']);
  }

  getLogin(form: NgForm): any {
    const { userName, password } = form.value;
    let userID: any;
    if (
      this._data.todos.find(
        (el) => el.userName == userName.trim() && el.password == password.trim()
      )
    ) {
      userID = this._data.todos.find(
        (el) => el.userName == userName.trim() && el.password == password.trim()
      )?.userID;

      this._data.setUserId(userID);
      this._data.loged();
      this._router.navigate(['todos']);
      form.reset();
    } else {
      clearInterval(s);
      this.wrong = true;
      s = setInterval(() => {
        this.wrong = false;
      }, 2000);
    }
  }
}
