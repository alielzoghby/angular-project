import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTodosComponent } from './home-todos/home-todos.component';
import { HomeComponent } from './home/home.component';
import { AuthgardGuard } from './authgard.guard';

import { LoginComponent } from './login/login.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CompletedComponent } from './completed/completed.component';
import { DeleteComponent } from './delete/delete.component';
import { ProductComponent } from './product/product.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todos',
    component: HomeTodosComponent,
    canActivate: [AuthgardGuard],
  },
  { path: 'todos/favourite', component: FavouriteComponent },
  { path: 'todos/completed', component: CompletedComponent },
  { path: 'todos/delete', component: DeleteComponent },
  { path: 'todos/details/:id', component: TodoDetailsComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
