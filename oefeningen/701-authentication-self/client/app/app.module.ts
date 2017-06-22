// app.module.ts
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from "@angular/forms";

// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Service
import {CityService} from "./services/city.service";
import {SessionService} from "./services/session.service";
import {LoginService} from "./services/login.service";
import {CanActivateGuard} from "./guards/canActivateGuard";

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent}  from './app.component';
import {CityAddComponent}  from './city.add.component';
import {LoginComponent} from "./login.component";
import {ApiComponent} from "./api.component";
import {AuthComponent} from "./auth.component";

@NgModule({
	imports     : [
		BrowserModule,
		HttpModule,
		FormsModule,
		RouterModule.forRoot(AppRoutes)
	],
	declarations: [
		MainComponent,
		AppComponent,
		CityAddComponent,
		LoginComponent,
		ApiComponent,
		AuthComponent
	],
	providers   : [
		CityService,
		SessionService,
		CanActivateGuard,
		LoginService
	],
	bootstrap   : [MainComponent]
})
export class AppModule {
}
