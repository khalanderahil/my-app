import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClint:HttpClient) {}
  getUsers():Observable<any>{
    return this._httpClint.get("/assets/users.json");
  }
}
