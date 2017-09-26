import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {PostcodeService} from './shared/postcode.service';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from '@agm/core';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		HttpModule,
		AgmCoreModule.forRoot({
			apiKey: 'JOUW_API_KEY'
		})
	],
	providers   : [PostcodeService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
