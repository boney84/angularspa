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

  loggedInUser:string='';
  loggedInTime:string='';
  background:string='';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  this.activatedRoute.params.
  subscribe(param=>{
    this.loggedInUser = param["userid"];
  });

  this.activatedRoute.queryParams.
  subscribe(param=>{
    this.loggedInTime= param["loggedInTime"];
  });


  }




    

}
