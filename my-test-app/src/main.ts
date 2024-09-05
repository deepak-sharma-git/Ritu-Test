import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';// ts( type script)file omit the extension//
import { AppComponent } from './app/app.component';
import { headerComponent } from './app/header/header .component';
import { UserComponent } from './app/user/user.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(headerComponent);
  bootstrapApplication(UserComponent);
