import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWeather } from '../../interfaces';

@Component({
  selector: 'app-weather-details-card',
  templateUrl: './weather-details-card.component.html',
  styleUrl: './weather-details-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherDetailsCardComponent {
  @Input() data: IWeather | null = null;

  geCardBgClass(main: string) {
    //convert to switch statement
    if (main === 'Clear') {
      return 'from-yellow-300 to-orange-400';
    } else if (main === 'Clouds') {
      return 'from-gray-300 to-gray-500';
    } else if (main === 'Snow') {
      return 'from-blue-100 to-blue-300';
    } else if (main === 'Drizzle	') {
      return 'from-gray-400 to-gray-600';
    } else if (main === 'Rain') {
      return 'from-blue-600 to-blue-800';
    } else if (main === 'Thunderstorm') {
      return 'from-indigo-700 to-purple-800';
    } else if (main === 'Windy') {
      return 'from-purple-200 to-purple-400';
    }
    return 'from-gray-300 to-gray-500';
  }
}
