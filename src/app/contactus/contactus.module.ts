import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactPhoneComponent } from './contact-phone/contact-phone.component';
import { ContactEmailComponent } from './contact-email/contact-email.component';


@NgModule({
  declarations: [
    ContactPhoneComponent,
    ContactEmailComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
