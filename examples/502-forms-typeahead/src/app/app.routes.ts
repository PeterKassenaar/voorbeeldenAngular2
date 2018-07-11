import {Routes} from '@angular/router';
import {AppComponent1} from './component1/app.component1';

export const AppRoutes: Routes = [
	{path: '', component: AppComponent1},
	{path: 'component1', component: AppComponent1},
];
