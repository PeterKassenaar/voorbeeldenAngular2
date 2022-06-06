import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppComponent1} from "./component1/app.component1";
import {AppComponent2} from "./component2/app.component2";
import {AppComponent3} from "./component3/app.component3";
import {AppComponent4} from "./component4/app.component4";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppComponent1,
    AppComponent2,
    AppComponent3,
    AppComponent4,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
