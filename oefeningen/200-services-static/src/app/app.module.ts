// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Custom Components
import {AppComponent} from './app.component';

// Import services
import {CityService} from "./shared/city.service";

// Module declaration
@NgModule({
	imports     : [BrowserModule],
	declarations: [AppComponent],
	bootstrap   : [AppComponent],
	providers   : [CityService] // DI voor service
})
export class AppModule {
}


