import { Injectable } from '@angular/core';
import { Phone } from './phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  public phones: Phone[]=[
    {company:'samsung',price:20000},
    {company:'iphone',price:50000},
    {company:'oneplus',price:25000},
    {company:'redme',price:15000}
  ]

}
