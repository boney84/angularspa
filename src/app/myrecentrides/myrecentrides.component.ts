import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RideService } from '../services/ride.service';
class Ride{
  source: string="";
  destination: string="";
} 
@Component({
  selector: 'app-myrecentrides',
  templateUrl: './myrecentrides.component.html',
  styleUrls: ['./myrecentrides.component.css']
})
export class MyrecentridesComponent implements OnInit {
  rides: Array<Ride>= [];
  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.getRides();
  }

  getRides(){
this.rideService.getRides()
.subscribe(response=>{
 this.rides= response
},
error=>{
  if(error.status==0){
  console.log("500 Internal server error.Unable to process the request");
  }
  else if(error.status==404){
    console.log("Resource not found");
  }
  else{
    console.log(error);
  }
  
});
console.log(this.rides);
  }

  deleteRide(rideId: number){
    console.log("delete ride"+ rideId);
    this.rideService.deleteRide(rideId)
    .subscribe(response=>{
      this.rides.splice(rideId);
    },error=>{
      console.log(error);
      if(error.status==404){
        console.log("Resource not found");
      }
      else if(error.status==403){
        console.log("Access denied");
      }
      else{
        console.log("500 Internal server error.Unable to process the request");
      }
    })
  }
}
