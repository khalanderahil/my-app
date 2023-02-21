import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public name: string = "khalander"
  public age: number = 25
  public isIndia: boolean = true
  public phone:number=91;

  submit(){
    alert("submit clicked")
  }
  filter(){
    alert("key pressed in input");
  }
  cancel(){
    alert("mouseenterd in cancel button ");
  }
}
