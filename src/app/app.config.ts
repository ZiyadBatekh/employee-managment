import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideTransloco, provideTranslocoConfig, provideTranslocoLoader } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './shared/services/transloco.loader';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslocoConfig({
      availableLangs: ['en', 'ar'],
      defaultLang: 'en',
      reRenderOnLangChange: true,
      prodMode: false
    }),
    provideTranslocoLoader(TranslocoHttpLoader)
  ]
};
