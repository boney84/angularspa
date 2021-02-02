import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authUrl: string="http://localhost:3000/auth/v1";

  constructor(private httpClient: HttpClient) { }

  authenticateUser(user:User): Observable<Object>{
  return this.httpClient.post(this.authUrl,user);
  }

  setToken(token: string): void{
    window.localStorage.setItem("authToken",token);
  }

  getToken(){
    return window.localStorage.getItem("authToken");
  }

  removeToken(): void{
    window.localStorage.removeItem("authToken");
  }

  isUserAuthenticated(): Promise<object>{
      return  this.httpClient.post(this.authUrl+"/isAuthenticated",{},{
      headers: new HttpHeaders().set("Authorization",`Bearer ${this.getToken()}`)
   })
   .pipe(map(response=> (response as any)["isAuthenticated"])).toPromise();
  }
}
