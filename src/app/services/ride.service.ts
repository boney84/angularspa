import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ride } from '../models/ride';

@Injectable({
  providedIn: 'root'
})


export class RideService {
  url: string="http://localhost:3000/rides";
  rides: Array<Ride>= [];
  constructor(private httpClient: HttpClient) { }

  getRides(){
   return  this.httpClient.get<Array<Ride>>(this.url);
  }

  addRide(ride: Ride) : Observable<Ride>{
     return this.httpClient.post<Ride>(this.url,ride);
    }

    deleteRide(rideId: number){
     return this.httpClient.delete(this.url+"/"+rideId);
    }
}
