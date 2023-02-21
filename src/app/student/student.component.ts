import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public students:any=[];
  public page: any=[];
  public limit: any=[];
  public pagination: any=[];
  
  // public name:string="";
  // public city:string="";
  // public phone:string="";
  // public address:string="";
  // public photo:any=[]
  // public placedIn:string="";
  // public salary: any=[];
  // public image: any=[];
  public term: string="";
 
  constructor(private _studentservice:StudentService )

  {_studentservice.getstudent().subscribe(
    (data:any)=>{this.students=data},
    (erroe:any)=>{alert("internal server error")},
  )}
  filter(){
    this._studentservice.getFilterdstudents(this.term).subscribe(
    (data:any)=>{
      this.students=data;
    },
    (error:any)=>{
      alert("internal server error")}
    )}

  //   pages(){
  //     this._studentservice.pagedstudent(this.page,this.limit).subscribe(
  //   (data:any)=>{this.students=data;},
  //  (error:any)=>{alert("internal server error"); }
  //     )}

}