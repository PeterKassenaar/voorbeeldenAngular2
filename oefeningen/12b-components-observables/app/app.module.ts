// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Custom Components
import {AppComponent} from './app.component';
import {CityDetail} from './city.detail';
import {NumRatings} from "./numRatings.component";
import {ProducerComponent} from "./producer.component";

// Services
import {CityService} from "./city.service";
import {PubSubService} from "./services/pubSubService";

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule],
	declarations: [
		AppComponent,
		CityDetail,
		NumRatings,
		ProducerComponent],
	bootstrap   : [AppComponent],
	providers   : [CityService, PubSubService]
})
export class AppModule {
}


