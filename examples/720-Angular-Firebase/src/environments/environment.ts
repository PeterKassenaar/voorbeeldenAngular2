// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // Create your own project at https://console.firebase.google.com/
    // and copy the credentials to this file. The rest of the project
    // should work out-of-the-box.
    apiKey: '<your API key>',
    authDomain: '<your domain>',
    databaseURL: '<your URL>',
    projectId: '<your projectID>',
    storageBucket: '<your Bucket',
    messagingSenderId: '<your ID>',
    appId: '<your appID>'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
