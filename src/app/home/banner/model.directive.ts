import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[classSet]'
})
export class ModelDirective {
  constructor(el: ElementRef) {
    console.log(el.nativeElement.style)
  }
}