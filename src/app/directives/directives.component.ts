import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl:'./directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public today : any = new Date();
  public user: any ={name: 'abc ', age: 20 }
  public names: string[]=["abc","abc" ]
  public states: string[]=["telangana","andhra","tamilnadu"]

  public users: any =[
    {name:'abc',age:20},
    {name: 'def',age:30}
    ]
  public students:any =[
    {name: 'anil',sub:'maths',marks:80},
    {name: 'bharat',sub:'science',marks:90},
    {name: 'chaitanya',sub:'english',marks:100}
  ]
  public products:any=[
    {name:'pen',price:10,rating:4},
    { name:"shirt",price:1000,rating:4,},
    { name:"phone",price:10000,rating:4},
  ] 
  public time: number= 0;

}