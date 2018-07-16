import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CityService} from './shared/services/city.service';
import {HttpClientModule} from '@angular/common/http';
import {HighlightDirective} from './shared/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent, HighlightDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
