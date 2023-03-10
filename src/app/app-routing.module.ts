import { Component, Directive, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { takeLast } from 'rxjs';
import { AboutCeoComponent } from './aboutus/about-ceo/about-ceo.component';
import { AttributesbDirectivesComponent } from './attributesb-directives/attributesb-directives.component';
import { AuthencticationGuard } from './authenctication.guard';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { Cart2Component } from './cart2/cart2.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivestaskComponent } from './directivestask/directivestask.component';
import { HoneComponent } from './hone/hone.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PhoneComponent } from './phone/phone.component';
import { ProductsComponent } from './products/products.component';
import { RedtangleComponent } from './redtangle/redtangle.component';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehilceComponent } from './vehilce/vehilce.component';


const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent, canActivate:[], children:[
    {path:'hone',component: HoneComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calulator',component:CalculatorComponent},
    {path:'redtangle',component:RedtangleComponent},
    {path:'directive',component:DirectivesComponent},
    {path:'directivestask',component:DirectivestaskComponent},
    {path:'cart',component:CartComponent},
    {path:"cart2",component:Cart2Component},
    {path:"attributesb-directives",component:AttributesbDirectivesComponent},
    {path:"phone",component:PhoneComponent},
    {path:"vehicle",component:VehilceComponent},
    {path:"products",component:ProductsComponent},
    {path:"bank",component:BankComponent},
    {path:"create-vehicle",component:CreateVehicleComponent},
    {path:'student',component:StudentComponent},
    {path: "create-user",component:CreateUserComponent},
    {path:"vehicle-details/:id",component:VehicleDetailsComponent},
    {path:"edit-vehicle/:id",component:CreateVehicleComponent},
    {path:'parent',component:ParentComponent},
    {path:"items",component:ItemsComponent},
    {path:"nav",component:NavComponent},
    {path:'cartlist',component:CartlistComponent},
    {path:"about-ceo",component:AboutCeoComponent},
    { path: 'contatus',loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
    {path:"users",component:UsersComponent},
    
    
  ]},
  { path:'',component:LoginComponent},
  {path:'**',component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
