import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HoneComponent } from './hone/hone.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RedtangleComponent } from './redtangle/redtangle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivestaskComponent } from './directivestask/directivestask.component';
import { TestComponent } from './test/test.component';
import { CartComponent } from './cart/cart.component';
import { Cart2Component } from './cart2/cart2.component';
import { AttributesbDirectivesComponent } from './attributesb-directives/attributesb-directives.component';
import { PhoneComponent } from './phone/phone.component';
import { VehilceComponent } from './vehilce/vehilce.component';
import {HttpClientModule} from '@angular/common/http';
// import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { BankComponent } from './bank/bank.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { PricePipe } from './price.pipe';
import { SalaryPipe } from './salary.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HoneComponent,
    CalculatorComponent,
    DataBindingComponent,
    RedtangleComponent,
    DirectivesComponent,
    DirectivestaskComponent,
    TestComponent,
    CartComponent,
    Cart2Component,
    AttributesbDirectivesComponent,
    PhoneComponent,
    VehilceComponent,
    ProductsComponent,
    BankComponent,
    CreateVehicleComponent,
    StudentComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    ParentComponent,
    ChildComponent,
    ItemsComponent,
    NavComponent,
    CartlistComponent,
    PricePipe,
    SalaryPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutusModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
