import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component {
  public students:any =[
    {name:'naresh',dob:'15/08/1997',eduction:'btech',isplaced:true,company:'TCS',package:120000},

    {name:'sai',dob:'15/08/1994',eduction:'mba',isplaced:true,company:'wipro',package:120000},

    {name:'raju',dob:'15/08/1993',eduction:'mba',isplaced:true,company:'wipro',package:120000},

    {name:'khalander',dob:'15/08/1995',eduction:'b.com',isplaced:true,company:'TCS',package:120000},

    {name:'abc',dob:'123',eduction:'none',isplaced:false,company:'none',package:100000},

    {name:'xyz',dob:'123',eduction:'none',isplaced:false,company:'none',package:100000},
  ]

  public name: string="";
  public dob: string="";
  public eduction: string="";
  public isplaced: boolean= true;
  public company: string="";
  public term:string="";
  public term2:string="";

  


  delete( i:any){
    this.students.splice(i,1);
    
  }
  hi(){
    this.students=this.students.filter((student:any)=>student.isplaced==true)
  }

  search1(){
    this.students=this.students.filter((student:any)=> student.name.indexOf(this.term) !=-1);
  }
  search2(){
    this.students=this.students.filter((student:any)=> student.company.indexOf(this.term2) !=-1);
  }
  package(){
    this.students=this.students.sort((a:any,b:any)=> a.package-b.package);
  }
  package1(){
    this.students=this.students.sort((a:any,b:any)=> b.package-a.package);
  }
}
