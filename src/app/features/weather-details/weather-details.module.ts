import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherIconUrlDirective } from '../../shared/directives';
import { WeatherDetailsCardComponent } from './components/weather-details-card/weather-details-card.component';
import { WeatherDetailsContainerComponent } from './containers/weather-details-container/weather-details-container.component';
import { weatherResolver } from './resolvers/weather.resolver';

const routes: Routes = [
  {
    path: '',
    component: WeatherDetailsContainerComponent,
    resolve: { weather: weatherResolver },
  },
];

@NgModule({
  declarations: [WeatherDetailsContainerComponent, WeatherDetailsCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WeatherIconUrlDirective,
  ],
})
export class WeatherDetailsModule {}
