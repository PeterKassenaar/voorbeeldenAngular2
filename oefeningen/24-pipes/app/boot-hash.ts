import {bootstrap} from 'angular2/platform/browser'
import {provide} from "angular2/core";
import {ROUTER_PROVIDERS,
	LocationStrategy,
	HashLocationStrategy} from "angular2/router";
import {HomeComponent} from "./home.component";

bootstrap(HomeComponent, [
	ROUTER_PROVIDERS ,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
