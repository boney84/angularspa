import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RideService } from '../services/ride.service';
class Ride{
  source: string="";
  destination: string="";
} 

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent implements OnInit {
  ride: Ride= new Ride();
  rides: Array<Ride>= [];

  constructor(private rideService: RideService) { 
  }

  ngOnInit(): void {
  }

  textcolor: string="white";
  destinationTextcolor: string="white";
  errorMessage: string="";
  successMessage: string= "";

  onChangeSource(event: any){
      if(event.target.value.length<=2){
      this.textcolor="red";
      console.log("Source should be more than 2 characters long.");
      this.errorMessage="Source should be more than 2 characters long.";
    }
    else{
      this.textcolor="lightgreen";
      this.ride.source= event.target.value;
      this.errorMessage="";
    }
  }

  onChangeDestination(event: any){
    if(event.target.value.length<=2){
    this.destinationTextcolor="red";
    console.log("Destination should be more than 2 characters long.");
  }
  else{
    this.destinationTextcolor="lightgreen";
    this.ride.destination= event.target.value;
  }
  }

  onSave(){
    // add to json server

this.rideService.addRide(this.ride)
.subscribe(response=>{
 this.rides.push(response);
 this.ride= new Ride();
 //this.successMessage="Ride has been created successfully";
 console.log("Ride has been created successfully");console.log(this.rides);
}, error=>{
  
  if(error.status==0){
    console.log("500 Internal server error.Unable to process the request");
  }
  else if(error.status==404){
    console.log("Resource not found");
  }
  else{
    console.log(error.message);
  }
});
    
  }
}
