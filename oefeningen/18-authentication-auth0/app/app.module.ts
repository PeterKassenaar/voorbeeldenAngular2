// app.module.ts
// Credits: https://auth0.com/blog/angular-2-ngmodules/
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Service
import {CityService} from "./city.service";

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent}  from './app.component';
import {CityAddComponent}  from './city.add.component';
import {CityDetailComponent}  from './city.detail.component';

// Authentication
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {AUTH_PROVIDERS} from "angular2-jwt";

@NgModule({
	imports     : [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(AppRoutes)
	],
	declarations: [
		MainComponent,
		AppComponent,
		CityAddComponent,
		CityDetailComponent
	],
	providers   : [
	    CityService,
        AuthService,
        AuthGuard,
        AUTH_PROVIDERS
    ],
	bootstrap   : [MainComponent]
})
export class AppModule {
}
