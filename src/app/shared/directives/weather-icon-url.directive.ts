import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWeatherIconUrl]',
  standalone: true,
})
export class WeatherIconUrlDirective {
  @Input('weatherIcon') icon: string | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (!this.icon) {
      console.warn('No icon provided to weatherIcon directive');
      return;
    }

    const iconUrl = `https://openweathermap.org/img/wn/${this.icon}@2x.png`;
    this.renderer.setAttribute(this.el.nativeElement, 'src', iconUrl);
  }
}
