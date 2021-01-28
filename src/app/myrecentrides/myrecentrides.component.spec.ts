import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecentridesComponent } from './myrecentrides.component';

describe('MyrecentridesComponent', () => {
  let component: MyrecentridesComponent;
  let fixture: ComponentFixture<MyrecentridesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrecentridesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrecentridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
