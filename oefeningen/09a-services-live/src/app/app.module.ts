// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Custom Components
import {AppComponent} from './app.component';

// Import services
import {MovieService} from "./shared/services/movie.service";

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule],
	declarations: [AppComponent],
	bootstrap   : [AppComponent],
	providers   : [
		{ provide: MovieService, useClass: MovieService}
	]
})
export class AppModule {
}


