import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      //withInterceptors([NameInterceptor])
  ), provideFirebaseApp(() => initializeApp({
    "projectId":"diabecare-push-notification-p",
    "appId":"1:94029566724:web:cfbf65d40b9527fae6b651",
    "storageBucket":"diabecare-push-notification-p.appspot.com",
    "apiKey":"AIzaSyBZtYnmUd8kQtyyTYN6pAVGhluw1k9jPPU",
    "authDomain":"diabecare-push-notification-p.firebaseapp.com",
    "messagingSenderId":"94029566724"})),
    provideMessaging(() => getMessaging())
  ],
});
