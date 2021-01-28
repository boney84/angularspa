import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        CreateRideComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MyQuickRideApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MyQuickRideApp');
  });

});
