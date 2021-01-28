import { Component, OnInit } from '@angular/core';
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
  constructor() { }

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
    this.rides.push(this.ride);
    console.log(this.rides);
    this.ride= new Ride();
    console.log("Ride has been created successfully");
    this.successMessage="Ride has been created successfully";
  }
}
