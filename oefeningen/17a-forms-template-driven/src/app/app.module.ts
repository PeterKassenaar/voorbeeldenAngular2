import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent1}  from './component1/app.component1';
import {AppComponent2}  from './component2/app.component2';
import {AppComponent3}  from './component3/app.component3';
import {AppComponent4}  from './component4/app.component4';


@NgModule({
	imports     : [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(AppRoutes)
	],
	declarations: [
		MainComponent,
		AppComponent1,
		AppComponent2,
		AppComponent3,
		AppComponent4
	],
	bootstrap   : [MainComponent]
})
export class AppModule {
}
