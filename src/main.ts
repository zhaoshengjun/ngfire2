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
    apiKey: "AIzaSyB1gBhmOSCeo6webO-sR2k3z4CXqip7Mgw",
    authDomain: "demoapp-ba311.firebaseapp.com",
    databaseURL: "https://demoapp-ba311.firebaseio.com",
    storageBucket: "demoapp-ba311.appspot.com",
   })
]);

