// Angular Modules
import {NgModule}      from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

// Custom Components
import {AppComponent} from './app.component';

// Import services
import {CityService} from "./city.service";

// Import pipe
import {FilterPipe} from "./filter.pipe";

// Module declaration
@NgModule({
	imports     : [BrowserModule, FormsModule, HttpModule],
	declarations: [AppComponent, FilterPipe], // DI for pipe
	bootstrap   : [AppComponent],
	providers   : [CityService] // DI for service
})
export class AppModule {
}


