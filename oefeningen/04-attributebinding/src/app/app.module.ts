// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Custom Components
import {AppComponent2} from './app-02.component';

// Module declaration
@NgModule({
    imports     : [BrowserModule],
    declarations: [AppComponent2],
    bootstrap   : [AppComponent2]
})
export class AppModule {
}


