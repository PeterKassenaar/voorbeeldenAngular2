// app.module.ts
// 1. Import commmon Angular stuff
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// 2. Routing - in its own module
import {AppRoutingModule, routingComponents} from './modules/app.routing.module';

// 3. Services - in its own module
import {AppServicesModule} from "./modules/app.services.module";

// 4. Import Login module w/ Login component
import {LoginModule} from './modules/login.module';

// 4. Components for the app. Only the MainComponent remains. The rest is in its own NgModule
import {MainComponent}  from './MainComponent';

@NgModule({
	imports     : [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule, 	// All routes inside their own module
		AppServicesModule,	// All services inside their own module
		LoginModule			// Login Module
	],
	declarations: [
		MainComponent,
		// Components are now bundled in the routing module
		routingComponents
	],
	// providers   : [
	//		Not neccesary anymore, as these are defined in their own module
	// ],
	bootstrap   : [
		MainComponent
	]
})
export class AppModule {

}
