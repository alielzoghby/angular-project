import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Todo } from '../todos';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  ids: any = localStorage.getItem('iduser');
  userId: any = JSON.parse(this.ids) || 0;

  data: any = localStorage.getItem('todos');
  newdata: Todo[] = JSON.parse(this.data) || [];

  idtodo: any = localStorage.getItem('ids');
  idtodos: any = JSON.parse(this.idtodo) || [];

  myForm!: FormGroup;

  constructor(private _data: DataService, private _router: Router) {
    this.myForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern(''),
      ]),
      password: new FormControl(null, [Validators.required]),
      repassword: new FormControl(null, [Validators.required]),
    });

    this.myForm.addValidators(
      matchValidator(this.myForm.get('password'), this.myForm.get('repassword'))
    );

    this.myForm.addValidators(
      this.matchValidatoruser(this.myForm.get('username'))
    );
  }

  signup(): any {
    if (!this.myForm.errors) {
      let id: number = this.userId;
      this.userId++;

      this.idtodos.push({ id: 0 });

      this.newdata.push({
        userID: id,
        userName: this.myForm.value.username,
        password: this.myForm.value.repassword,
        todos: [],
        deleted: [],
        favourite: [],
        completed: [],
        theme: 1,
      });

      console.log(this.userId);
      localStorage.setItem('iduser', JSON.stringify(this.userId));
      localStorage.setItem('ids', JSON.stringify(this.idtodos));
      localStorage.setItem('todos', JSON.stringify(this.newdata));
      window.location.reload();
    }
  }

  matchValidatoruser(control: any): ValidatorFn {
    return () => {
      if (this._data.todos.find((el) => el.userName == control.value.trim()))
        return { user_match: 'user_match' };
      return null;
    };
  }
}

function matchValidator(control: any, controlTwo: any): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value)
      return { match_error: 'Value does not match' };
    return null;
  };
}
