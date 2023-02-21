import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private _httpClint:HttpClient) { }
  getbank():Observable <any>{
    return this._httpClint.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
  }
}
