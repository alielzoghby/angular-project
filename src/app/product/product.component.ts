import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  myproduct: any;
  constructor(private _prods: ProductService) {
    this._prods.getProduct().subscribe((res) => {
      console.log(res);
      this.myproduct = res;
    });
  }
}
