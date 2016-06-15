import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {CityService} from './services/city.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OrderService} from './services/order.service';

bootstrap(AppComponent,  [CityService, HTTP_PROVIDERS, OrderService]);
