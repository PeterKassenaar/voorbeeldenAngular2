import {bootstrap} from '@angular/platform-browser-dynamic';
import {appRouterProviders} from  './app.routes';
import {HomeComponent} from "./home.component";

bootstrap(HomeComponent, [
	appRouterProviders
]);
