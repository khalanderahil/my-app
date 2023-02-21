import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  public phones: any =[];
  constructor(private _phoneservice:PhoneService){
    this.phones=this._phoneservice.phones;

  }

  


}
