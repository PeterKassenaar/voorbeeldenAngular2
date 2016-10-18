// app.module.ts
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
	providers   : [CityService],
	bootstrap   : [MainComponent]
})
export class AppModule {
}
