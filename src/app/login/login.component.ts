import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { RouteService } from '../services/route.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string="";

  constructor(
    private authenticationService: AuthenticationService,
    private routeService: RouteService) { }

 loginForm= new FormGroup({
   username : new FormControl("",[Validators.required]),
   password : new FormControl("",[Validators.required, Validators.minLength(6)])
 });

  ngOnInit(): void {
  }

  loginSubmit(){
    let user = new User();
    let  token='';
    user.username=this.getUsername()?.value;
    user.password=this.getPassword()?.value;
    this.authenticationService.authenticateUser(user)
    .subscribe(data=>{
 token= (data as any)["token"];
 this.authenticationService.setToken(token);
 this.routeService.toDashboard(this.getUsername()?.value);

},error=>{
      console.log(error);
      if(error.status==403){
        console.log("403 Access denied");
        this.errorMessage="Username or password is incorrect!";
      }
      else {
        console.log("Internal server error. Please try again later");
      }
    }
    )
  }

  getUsername(){
    return this.loginForm.get("username");
  }

  getPassword(){
    return this.loginForm.get("password");
  }

  getUsernameErrorMessage(){
    if(this.getUsername()?.invalid && (this.getUsername()?.touched || this.getUsername()?.dirty)){
       return 'Username should not be left blank';
    }
    else{
      return '';
    }
  }

  getPassworErrorMessage(){
     if(this.getPassword()?.invalid && (this.getPassword()?.touched || this.getPassword()?.dirty))
     {
      if(this.getPassword()?.hasError('required'))
      {
        return 'Password should not be left blank';
      }
      else if(this.getPassword()?.hasError("minlength")){
        return 'Password should be at least 6 characters long';
      }
      else{
        return '';
      }
     }
     else{
       return '';
     }
  }
}
