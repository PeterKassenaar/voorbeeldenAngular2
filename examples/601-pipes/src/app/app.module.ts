import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Component(s)
import { AppComponent } from './app.component';

// Pipes
import {FilterPipe} from './shared/pipes/filter.pipe';
import {DefaultImagePipe} from "./shared/pipes/defaultImage.pipe";

// Services
import {CityService} from './shared/services/city.service';

@NgModule({
  declarations: [
    AppComponent, FilterPipe, DefaultImagePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
