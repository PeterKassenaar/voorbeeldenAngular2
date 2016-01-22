import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from "angular2/router";
import {HomeComponent} from "./home.component";
import {CityService} from "./city.service";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(HomeComponent, [
	ROUTER_PROVIDERS, CityService, HTTP_PROVIDERS
]);
