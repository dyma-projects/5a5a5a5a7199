import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') public color: string;
  @HostListener('document:keydown', ['$event']) keydownWindowHandler($event) {
    switch ($event.keyCode) {
      case 37: // <
        this.color = 'red';
      break;
      case 38: // ^
        this.color = 'blue';
      break;
      case 39: // >
        this.color = 'green';
      break;
      case 40: // v
        this.color = 'orange';
      break;
      default:
      return;
    }
  }

}
