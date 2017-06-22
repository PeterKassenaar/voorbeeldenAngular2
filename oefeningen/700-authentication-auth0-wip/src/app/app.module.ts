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
import {AuthModule} from "./auth/auth.module";

@NgModule({
	imports     : [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(AppRoutes),
        AuthModule
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
        AuthGuard
    ],
	bootstrap   : [MainComponent]
})
export class AppModule {
}
