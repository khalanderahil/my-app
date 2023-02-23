import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImg]'
})
export class ImgDirective {

  constructor( private _elementRef:ElementRef    ) { 
    _elementRef.nativeElement.style.color = "blue";
  }

}
