import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl(),
    }
  )
  

  constructor(private _LoginService:LoginService,private _router:Router){}

  
  submit(){
    console.log(this.loginForm)

    this._LoginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login succesful")
        sessionStorage.setItem("my-app-token",data.token);
        this._router.navigateByUrl("/dashboard"); 
      },
      (err:any)=>{
        alert("invalid email or password")
      }
    )
  }

  

}
