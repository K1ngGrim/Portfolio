import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';
import {BASE_PATH} from '../../projects/strapi-lib/src/lib';
import {environment} from '../environments/environment';

import {routes} from './app.routes';
import {provideMarkdown} from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideMarkdown(),
    { provide: BASE_PATH, useValue: environment.apiUrl }
  ]
};
