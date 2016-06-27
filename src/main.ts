import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
   FIREBASE_PROVIDERS,
   defaultFirebase({
    apiKey: "your key",
    authDomain: "your key",
    databaseURL: "your key",
    storageBucket: "your key",
   })
]);

