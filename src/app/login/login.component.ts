import { Component, OnInit } from '@angular/core';
class User{
  username: string = "";
  password: string = "";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: User= new User();
  constructor() { }

  ngOnInit(): void {
  }
  loginSubmit(){
    console.log('username '+this.user.username+' password '+ this.user.password);
    this.user=new User();
  }

}
