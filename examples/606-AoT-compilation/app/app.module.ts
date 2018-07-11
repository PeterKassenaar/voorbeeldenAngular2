// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Custom Components
import {AppComponent} from './app.component';
import {CityDetail} from './city.detail';
import {CityOrders} from './city.orders';

// Services
import {CityService} from "./services/city.service";
import {OrderService} from "./services/order.service";

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule],
	declarations: [
		AppComponent,
		CityDetail,
		CityOrders
	],
	bootstrap   : [AppComponent],
	providers   : [CityService, OrderService]
})
export class AppModule {
}


