import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  static getproducts() {
    throw new Error('Method not implemented.');
  }
  constructor(private _httpClient:HttpClient) {}
  getproducts(): Observable <any>{
    return this._httpClient.get('https://fakestoreapi.com/products');
  }
}
