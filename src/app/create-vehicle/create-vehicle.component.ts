import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

public Vehicleform:FormGroup=new FormGroup(
  {
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    color : new FormControl(),
    image:  new FormControl(),
  }
)
public isEdit:boolean = false;
public id: any="";

constructor(private _Vehicleservice:VehicleService,private _activateRoute: ActivatedRoute){
  this._activateRoute.params.subscribe(
    (data:any)=>{
      alert(data.id)

      if(data.id){
        this.isEdit = true;
        this.id = data.id;
      }

      this._Vehicleservice.getVehicleDetails(data.id).subscribe(
        (data:any)=>{
          this.Vehicleform.patchValue(data);
        }

      )
    }
  )
}




submit(){
  console.log(this.Vehicleform.value);

  if(this.isEdit) {
    // update
    this._Vehicleservice.updatevehicle(this.Vehicleform.value,this.id).subscribe(
      (data:any)=>{
        alert('vehicle uploded.')
      }
    )
    
  }
  else{
    // created
    this._Vehicleservice.createvehicle(this.Vehicleform.value,).subscribe(
      (data:any)=>{
        alert('vehicle creates.')
      }
    )
    
  }


this. _Vehicleservice.createvehicle(this.Vehicleform.value).subscribe(
  (data:any)=>{
    alert("vehicle created succesfully")
  },
  (err:any)=>{
    alert("internal server error")},

)
  
}
}
