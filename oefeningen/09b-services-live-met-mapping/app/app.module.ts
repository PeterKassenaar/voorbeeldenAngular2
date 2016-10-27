// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Custom Components
import {AppComponent} from './app.component';

// Import services
import {MovieService} from "./movie.service";

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule],
	declarations: [AppComponent],
	bootstrap   : [AppComponent],
	providers   : [MovieService] // DI voor service
})
export class AppModule {
}


