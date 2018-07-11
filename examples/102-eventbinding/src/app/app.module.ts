// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Custom Components
import {AppComponent} from './app.component';
import {AppComponent2} from './app-02-complete.component';

// Module declaration
@NgModule({
    imports     : [BrowserModule],
    declarations: [AppComponent, AppComponent2],
    bootstrap   : [AppComponent]
})
export class AppModule {
}


