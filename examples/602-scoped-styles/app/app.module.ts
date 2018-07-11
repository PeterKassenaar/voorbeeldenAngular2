// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Custom Components
import {AppComponent} from './components/component1/app.component';
import {Component2} from './components/component2/component-2';

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule],
	declarations: [AppComponent, Component2],
	bootstrap   : [AppComponent]
})
export class AppModule {
}


