import { provideRouter, RouterModule } from '@angular/router'; // RouterModule mit einfügen
import { appRoutes } from './app.routes';

export const appConfig = {
  providers: [provideRouter(appRoutes), RouterModule] // RouterModule sicherstellen
};
