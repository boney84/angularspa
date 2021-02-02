import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  toDashboard(username: string){
    this.router.navigate(['dashboard',{
      "userid":username
    }],
    {
      queryParams:{
        "loggedInTime": new Date().toTimeString()
      }
    }
    );
  }

  toLogin(){
    this.router.navigate(['login']);
  }
}
