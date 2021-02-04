import { Component, OnInit } from '@angular/core';
import { Ride } from '../models/ride';
import { RideService } from '../services/ride.service';

@Component({
  selector: 'app-myrecentrides',
  templateUrl: './myrecentrides.component.html',
  styleUrls: ['./myrecentrides.component.css']
})
export class MyrecentridesComponent implements OnInit {
  rides: Array<Ride>= [];
  background:string='';
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



}
