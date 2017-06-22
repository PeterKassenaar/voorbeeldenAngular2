// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Custom Components
import {AppComponent} from './app.component';
import {CityDetail} from './city.detail';
import {CityService} from "./shared/city.service";

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule],
	declarations: [AppComponent, CityDetail],
	bootstrap   : [AppComponent],
	providers   : [CityService]
})
export class AppModule {
}


