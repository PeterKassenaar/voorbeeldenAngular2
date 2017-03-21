import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {MaterialModule} from "@angular/material";
import {AppComponent1} from "./component1/app.component1";
import {WikipediaService} from "./services/wikipedia.service";

@NgModule({
    declarations: [
        AppComponent1
    ],
    imports     : [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        MaterialModule
    ],
    providers   : [WikipediaService],
    bootstrap   : [AppComponent1]
})
export class AppModule {
}
