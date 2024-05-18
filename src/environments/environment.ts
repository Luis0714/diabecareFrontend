// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: 'http://localhost:3002/diabecare/api',
  serverNotificaction: 'https://localhost:7213/api',
  firebaseConfig: {
    projectId: "diabecare-push-notification-p",
    appId: "1:94029566724:web:cfbf65d40b9527fae6b651",
    storageBucket: "diabecare-push-notification-p.appspot.com",
    apiKey: "AIzaSyBZtYnmUd8kQtyyTYN6pAVGhluw1k9jPPU",
    authDomain: "diabecare-push-notification-p.firebaseapp.com",
    messagingSenderId: "94029566724"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
