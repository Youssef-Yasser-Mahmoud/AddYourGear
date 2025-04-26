import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLowRateCard]',
})
export class LowRateCardDirective implements OnInit {
  @Input('appLowRateCard') rate: number = 5;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    if (this.rate < 5) {
      this.element.nativeElement.style.backgroundColor = '#ff6467';
      this.element.nativeElement.style.border = '1px solid rgb(138 60 0)';
      this.element.nativeElement.style.boxShadow = '2px 3px 9px 3px rgb(165 67 54)'
    }
  }
}

