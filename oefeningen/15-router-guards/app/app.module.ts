// app.module.ts
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Service
import {CityService} from "./city.service";
import {AuthService} from "./auth.service";

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent}  from './app.component';
import {CityAddComponent}  from './city.add.component';
import {CityDetailComponent}  from './city.detail.component';
import {CanDeactivateComponent} from "./canDeactivate.component";

// Guards
import {CanActivateViaAuthGuard} from "./canActivateViaAuthGuard";
import {CanDeactivateGuard} from "./canDeactivateGuard";

@NgModule({
	imports     : [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(AppRoutes)
	],
	declarations: [
		MainComponent,
		AppComponent,
		CityAddComponent,
		CityDetailComponent,
		CanDeactivateComponent
	],
	providers   : [
		CityService,
		{
			provide : 'CanAlwaysActivateGuard',	// Guard as a function
			useValue: () => {
				console.log("Route requested");
				return true; // do validation or other stuff here
			}
		},
		AuthService,
		CanActivateViaAuthGuard,
		CanDeactivateGuard
	],
	bootstrap   : [
		MainComponent
	]
})
export class AppModule {
}
