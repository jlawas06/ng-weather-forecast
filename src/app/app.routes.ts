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
    ],
  },
];
