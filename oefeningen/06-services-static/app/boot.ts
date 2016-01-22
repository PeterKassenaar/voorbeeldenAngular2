import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component';
import {CityService} from "./city.service";

bootstrap(AppComponent, [CityService]);
