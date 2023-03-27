import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getProduct() {
    return this._http.get(`https://dummyjson.com/products`);
  }

  productById(id: any) {
    this._http.get(`https://dummyjson.com/products/${id}`);
  }
}
