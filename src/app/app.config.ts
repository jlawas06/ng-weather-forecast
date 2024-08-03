import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { LayoutModule } from './layout/layout.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LayoutModule),
    provideRouter(routes),
    provideAuth0({
      domain: '{AUTH0_DOMAIN}',
      clientId: '{AUTH0_CLIENT_ID}',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
