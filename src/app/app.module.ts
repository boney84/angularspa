import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyrecentridesComponent } from './myrecentrides/myrecentrides.component';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// for mat-toolbar, mat-icon, mat-expansion module, material-card module
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontcolorDirective } from './directives/fontcolor.directive';
import { BackgroundDirective } from './directives/background.directive';
import { RidecardComponent } from './ridecard/ridecard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyrecentridesComponent,
    CreateRideComponent,
    LoginComponent,
    DashboardComponent,
    FontcolorDirective,
    BackgroundDirective,
    RidecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
