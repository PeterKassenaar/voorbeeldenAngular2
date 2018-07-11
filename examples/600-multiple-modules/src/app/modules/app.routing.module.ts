// app.routing.module.ts
// Routing in its own module - now imported in main module app.module.ts

// 1. Import Router stuff
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// 2. Import Components
import {AppComponent} from "../components/app.component";
import {CityAddComponent} from "../components/city.add.component";
import {CityDetailComponent} from "../components/city.detail.component";
import {CanActivateViaAuthGuard} from "../shared/guards/canActivateViaAuthGuard";
import {CanDeactivateComponent} from "../components/canDeactivate.component";
import {CanDeactivateGuard} from "../shared/guards/canDeactivateGuard";
import {LoginComponent} from "../components/login.component";

// 3. Routing table
const AppRoutes: Routes = [
	{
		path     : '',
		component: AppComponent
	},
	{
		path       : 'home',
		component  : AppComponent,
		canActivate: ['CanAlwaysActivateGuard'] // Function, defined in app.module.ts
	},
	{
		path       : 'add',
		component  : CityAddComponent,
		canActivate: [CanActivateViaAuthGuard]
	},
	{
		path         : 'deactivate',
		component    : CanDeactivateComponent,
		canDeactivate: [CanDeactivateGuard]
	},
	{
		path     : 'detail/:id',
		component: CityDetailComponent
	},
	{
		path     : 'login',
		component: LoginComponent
	}
];

// 4. Declare *new* NgModule!
@NgModule({
	imports: [RouterModule.forRoot(AppRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [
	AppComponent,
	CityAddComponent,
	CityDetailComponent,
	CanDeactivateComponent
];