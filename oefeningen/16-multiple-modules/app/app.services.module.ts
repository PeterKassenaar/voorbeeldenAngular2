// app.services.module.ts
// Services in its own module - now imported in main module app.module.ts

// 1. Import NgModule stuff
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// 2. Import Services & Guards
import {CityService} from "./city.service";
import {AuthService} from "./auth.service";
import {CanActivateViaAuthGuard} from "./canActivateViaAuthGuard";
import {CanDeactivateGuard} from "./canDeactivateGuard";

// 3. Declare module. Import and Export CommonModule, decorated with providers: [...] array
@NgModule({
	imports  : [CommonModule],
	exports  : [
		CommonModule
	],
	providers: [
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
	]
})
export class AppServicesModule {
}

