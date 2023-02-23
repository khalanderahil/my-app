import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEmailComponent } from './contact-email/contact-email.component';
import { ContactPhoneComponent } from './contact-phone/contact-phone.component';

const routes: Routes = [
  {path:'contact-email',component:ContactEmailComponent},
  {path:'contact-phone',component:ContactPhoneComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
