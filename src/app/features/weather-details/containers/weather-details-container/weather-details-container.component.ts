import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWeather } from '../../interfaces';

@Component({
  selector: 'app-weather-details-container',
  templateUrl: './weather-details-container.component.html',
  styleUrl: './weather-details-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDetailsContainerComponent {
  weatherData: IWeather | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.weatherData = this.route.snapshot.data['weather'];
  }
}
