// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

// Custom Components
import {AppComponent} from './app.component';

// Import services
import {CityService} from "./shared/services/city.service";

// Module declaration
@NgModule({
    imports     : [BrowserModule, HttpClientModule],
    declarations: [AppComponent],
    bootstrap   : [AppComponent],
    providers   : [CityService] // DI voor service
})
export class AppModule {
}


