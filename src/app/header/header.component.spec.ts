import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatToolbarModule,
        MatIconModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a mat-toolbar',()=>{
  let toolbar= fixture.debugElement.query(By.css('mat-toolbar'))
  expect(toolbar).toBeTruthy();
  });

  it('should have a mat-icon',()=>{
    let maticon= fixture.debugElement.query(By.css('mat-icon'))
    expect(maticon).toBeTruthy();
    });

    it('should have a QuickRide in title toolbar',()=>{
    let toolbarTitleSpan = fixture.debugElement.query(By.css('mat-toolbar span'));
    expect(toolbarTitleSpan.nativeElement.innerText).toEqual('QuickRide');
    })
});
