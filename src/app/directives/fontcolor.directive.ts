import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFontcolor]'
})
export class FontcolorDirective {
   constructor(private element: ElementRef) {
    element.nativeElement.style.color='olive';
   }

  @Input()
  appFontcolor: string="";

@HostListener('mouseover')
onEnter(){
   this.element.nativeElement.style.color=this.appFontcolor;
}

@HostListener('mouseout')
onExit(){
  this.element.nativeElement.style.color='olive';
}
}
