import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ContactoService } from './services/contacto.service';
import { ContactoServiceInterface } from './services/contacto.service.interface';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {provide : ContactoServiceInterface, useClass : ContactoService}
  ]
};
