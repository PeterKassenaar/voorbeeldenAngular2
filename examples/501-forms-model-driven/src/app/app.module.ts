import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent1}  from './component1/app.component1';
import {AppComponent2} from "./component2/app.component2";

@NgModule({
    imports     : [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
