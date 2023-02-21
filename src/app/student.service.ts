import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClint:HttpClient) { }
  getstudent(){
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  
  getFilterdstudents(term:string):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)
  }

  pagedstudent(page:any, limit:any):Observable<any>{
    return this._httpClint.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
  

}
