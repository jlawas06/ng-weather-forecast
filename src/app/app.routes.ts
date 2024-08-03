import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing';
import { LayoutContainerComponent } from './layout/containers/layout-container/layout-container.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'weather',
        loadChildren: () =>
          import('./features/weather-details/weather-details.module').then(
            (m) => m.WeatherDetailsModule
          ),
      },
    ],
  },
];
