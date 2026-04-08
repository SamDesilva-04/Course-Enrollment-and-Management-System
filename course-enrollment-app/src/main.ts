import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Points to your app.ts
import { appConfig } from './app/app.config'; // Points to config above

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));