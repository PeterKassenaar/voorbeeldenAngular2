// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

// Custom Components
import {AppComponent} from './app.component';

// Module declaration
@NgModule({
    imports     : [BrowserModule, FormsModule],
    declarations: [AppComponent],
    bootstrap   : [AppComponent]
})
export class AppModule {
}


