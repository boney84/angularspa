import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ride } from '../models/ride';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})


export class RideService {
  url: string="http://localhost:3000/api/v1/rides";
  rides: Array<Ride>= [];

  constructor(private httpClient: HttpClient,
   private authenticationService:AuthenticationService) { }

  getRides(){
   let token:any= this.authenticationService.getToken();
   return  this.httpClient.get<Array<Ride>>(this.url,{
   headers: new HttpHeaders().set("Authorization",`Bearer ${token}`)
   });
  }

  addRide(ride: Ride) : Observable<Ride>{
    let token:any= this.authenticationService.getToken();
     return this.httpClient.post<Ride>(this.url,ride,{
       headers: new HttpHeaders().set("Authorization",`Bearer ${token}`)
     });
    }

    deleteRide(rideId: number){
      let token:any= this.authenticationService.getToken();
     return this.httpClient.delete(this.url+"/"+rideId,{
      headers: new HttpHeaders().set("Authorization",`Bearer ${token}`)
     });
    }
}
