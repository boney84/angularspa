import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { LoginComponent } from './login/login.component';
import { MyrecentridesComponent } from './myrecentrides/myrecentrides.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[CanActivateGuard],
    children:[
      {
        path:'ride-view',
        component:MyrecentridesComponent
      },
      // {
      //   path:'ride-create',
      //   component:CreateRideComponent
      // },
      {
        path:'',
        redirectTo:'ride-view',
        pathMatch:'full'
      },
    ]
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
