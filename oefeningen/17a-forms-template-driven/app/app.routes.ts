import {Routes} from '@angular/router';
import {MainComponent} from './MainComponent';
import {AppComponent1} from './app.component1';
import {AppComponent2} from './app.component2';

export const AppRoutes: Routes = [
	// {path: '', component: MainComponent}, // not used, otherwise component would be loaded into itself
	{path: 'component1', component: AppComponent1},
	{path: 'component2', component: AppComponent2}
];
