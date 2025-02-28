import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDcomparsa]'
})
export class DcomparsaDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color = "red";
    
  }
}
