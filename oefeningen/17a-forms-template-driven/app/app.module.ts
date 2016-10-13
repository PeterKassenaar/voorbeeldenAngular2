import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent1}  from './app.component1';
import {AppComponent2}  from './app.component2';


@NgModule({
	imports     : [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(AppRoutes)
	],
	declarations: [
		MainComponent,
		AppComponent1,
		AppComponent2
	],
	bootstrap   : [MainComponent]
})
export class AppModule {
}
