import { Component, Input, OnInit } from '@angular/core';
import { Ride } from '../models/ride';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-ridecard',
  templateUrl: './ridecard.component.html',
  styleUrls: ['./ridecard.component.css']
})
export class RidecardComponent {
  @Input()
  ride: Ride = new Ride;

  @Input()
  background: string='';

  constructor(private rideService: RideService) { }

  // deleteRide(rideId: number){
  //   console.log("delete ride"+ rideId);
  //   this.rideService.deleteRide(rideId)
  //   .subscribe(response=>{
  //     this.rides.splice(rideId);
  //   },error=>{
  //     console.log(error);
  //     if(error.status==404){
  //       console.log("Resource not found");
  //     }
  //     else if(error.status==403){
  //       console.log("Access denied");
  //     }
  //     else{
  //       console.log("500 Internal server error.Unable to process the request");
  //     }
  //   })
  // }


}
