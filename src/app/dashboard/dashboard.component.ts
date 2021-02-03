import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ride } from '../models/ride';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rides: Array<Ride>= [];
  loggedInUser:string='';
  loggedInTime:string='';
  background:string='';

  constructor(private rideService: RideService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  this.activatedRoute.params.
  subscribe(param=>{
    this.loggedInUser = param["userid"];
  });

  this.activatedRoute.queryParams.
  subscribe(param=>{
    this.loggedInTime= param["loggedInTime"];
  });

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
