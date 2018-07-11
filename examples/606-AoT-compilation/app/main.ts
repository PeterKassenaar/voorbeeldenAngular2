// ******************
// Old JIT Code
// ******************
// // 1. Import bootstrapping dependencies
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//
// // 2. Import or own  module
// import {AppModule} from './app.module';
//
// // 3. Bootstrap our app
// platformBrowserDynamic().bootstrapModule(AppModule);

// ******************
// Shiny, New AoT-code
// ******************

// 1. import platformBrowser, instead of platform-browser-dynamic
import {platformBrowser}    from '@angular/platform-browser';

// 2. import the resulting AppModule AoT-factory instead of uncompiled Module
import {AppModuleNgFactory} from '../aot/app/app.module.ngfactory';

// 3. bootstrap platformBrowser (not -Dynamic) and .bootstrapModuleFactory"
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
