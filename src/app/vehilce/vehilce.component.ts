import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehilce',
  templateUrl: './vehilce.component.html',
  styleUrls: ['./vehilce.component.css']
})
export class VehilceComponent {

  public vehilces: Vehicle[] = [];
  public term:string="";
  public column:string="";
  public order:string="";
  public page:number=0;
  public limit:any=[];
  
  


  constructor (private _vehilceService:VehicleService, private _router:Router){
    -_vehilceService.getVehicle().subscribe(
      (data:Vehicle[])=>{
        this.vehilces=data;
      },
      (error:any)=>{
        alert("internal server erroe")}
         )  
  }

  filter(){
    this._vehilceService.getFilerdVehicle(this.term).subscribe(
    (data:any)=>{
      this.vehilces=data;
    },
    (error:any)=>{
      alert("internal server error")}
    )
  }
  sort(){
    this._vehilceService.getsortedVehicle(this.column,this.order).subscribe(
  (data:any)=>{this.vehilces=data;},
 (error:any)=>{alert("internal server error"); }
    )
  }
  pagination(){
    this._vehilceService.getPagedVehicle(this.page,this.limit).subscribe(
  (data:any)=>{this.vehilces=data;},
 (error:any)=>{alert("internal server error"); }
    )
  }

  delete(id:string){
    this._vehilceService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload()
        {
          (error:any)=>{
            alert('internal servar error');}
        }
        
      }
    )
  }
  view(id:string){
    this._router.navigateByUrl("/dashboard/vehicle-details/"+id);
  }
  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id)
    
  }
}
