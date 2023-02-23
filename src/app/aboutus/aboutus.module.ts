import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutDirectivesComponent } from './about-directives/about-directives.component';
import { AboutAdressComponent } from './about-adress/about-adress.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutDirectivesComponent,
    AboutAdressComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCeoComponent
  ]
})
export class AboutusModule {}
