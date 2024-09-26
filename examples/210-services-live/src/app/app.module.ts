// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

// Custom Components
import {AppComponent} from './app.component';

// Import services
import {MovieService} from "./shared/services/movie.service";
import {NgOptimizedImage} from "@angular/common";

// Module declaration
@NgModule({
    imports: [BrowserModule, HttpClientModule, NgOptimizedImage],
	declarations: [AppComponent],
	bootstrap   : [AppComponent],
	providers   : [
		// Longhand notation: provide the requested ServiceClass when asked for a specific provider
		{ provide: MovieService, useClass: MovieService}
		// shorthand notation, just: 'MovieService' (b/c they are the same)
	]
})
export class AppModule {
}


