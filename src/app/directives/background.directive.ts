import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnChanges {
  @Input()
  appBackground: string="";
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor="pink";
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.style.backgroundColor= this.appBackground;
  }

  //  @HostListener('mouseover')
  //  onEnter(){
  //    console.log(this.appBackground);
  //   this.element.nativeElement.style.backgroundColor= this.appBackground;
  //  }

  //  @HostListener('mouseout')
  //  onLeave(){
  //   this.element.nativeElement.style.backgroundColor="orange";
  //  }
}
