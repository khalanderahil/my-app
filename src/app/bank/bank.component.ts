import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  public banks:any=[];
  constructor(private _BankService:BankService){
   _BankService.getbank().subscribe(
    (data:any)=>{this.banks= data;},
    (error:any)=>{ alert("internal serval error")}
   )
    }
}
