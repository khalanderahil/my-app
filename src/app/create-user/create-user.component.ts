import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userForm:FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl("",[Validators.required,Validators.min(0),Validators.max(100)]),

    phone: new FormControl("",[Validators.required,Validators.min(100000000),Validators.max(99999999999)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    
    adress:new FormGroup({
      state:new FormControl('',[Validators.required]),
      
      pin : new FormControl(),
    }),

    cards: new FormArray([]),
    type: new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl(),
  });
   
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('',[Validators.required]),
        expiry: new FormControl(),
        cvv:  new FormControl(),
      })
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm)
    this.userForm.markAllAsTouched();
    if (this.userForm.valid){
      alert('submitted')
    }
        
  }
}
