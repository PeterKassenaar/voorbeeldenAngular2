import {bootstrap} from '@angular/platform-browser-dynamic';
import {appRouterProviders} from  './app.routes';
import {HomeComponent} from "./home.component";
import {CanActivateGuard} from "./canActivateGuard";
import {CanDeactivateGuard} from "./canDeActivateGuard";

bootstrap(HomeComponent, [
	appRouterProviders,
	CanActivateGuard,
	CanDeactivateGuard,
	{
		provide : 'CanAlwaysActivateGuard',
		useValue: () => {
			console.log("Detail route requested");
			return true;
		}
	}
]);
