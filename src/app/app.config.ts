import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { AuthModule } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: '{AUTH0_DOMAIN}',
        clientId: '{AUTH0_CLIENT_ID}',
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      })
    ),
  ],
};
