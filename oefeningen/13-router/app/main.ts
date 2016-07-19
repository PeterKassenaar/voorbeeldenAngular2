import {bootstrap} from '@angular/platform-browser-dynamic'
import {HomeComponent} from "./home.component";
import {appRouterProviders} from './app.routes';

bootstrap(HomeComponent, [
	appRouterProviders // register router providers, configured in app.routes.ts
])
	.catch(err => console.log(err));
