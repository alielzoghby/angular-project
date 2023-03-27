import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeTodosComponent } from './home-todos/home-todos.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { CompletedComponent } from './completed/completed.component';
import { DeleteComponent } from './delete/delete.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { ProductComponent } from './product/product.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangeThemeComponent,
    LoginComponent,
    SignUpComponent,
    HomeTodosComponent,
    TodoComponent,
    NotFoundComponent,
    NavComponent,
    CompletedComponent,
    DeleteComponent,
    FavouriteComponent,
    DeleteTodoComponent,
    ProductComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
