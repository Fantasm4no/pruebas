import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"fir-auth-910f2","appId":"1:207960344490:web:5afab687d8b50015990dd3","storageBucket":"fir-auth-910f2.appspot.com","apiKey":"AIzaSyAb-3f3K866_Qg3X-QOxstmyZheuwZkNJs","authDomain":"fir-auth-910f2.firebaseapp.com","messagingSenderId":"207960344490"})), provideAuth(() => getAuth())]
};
