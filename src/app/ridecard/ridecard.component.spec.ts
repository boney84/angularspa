import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidecardComponent } from './ridecard.component';

describe('RidecardComponent', () => {
  let component: RidecardComponent;
  let fixture: ComponentFixture<RidecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
