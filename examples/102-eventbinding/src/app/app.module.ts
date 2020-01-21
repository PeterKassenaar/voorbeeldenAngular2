// Angular Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Custom Components
import {AppComponent} from './app.component';
import {AddCityComponent} from './app-02-complete.component';

// Module declaration
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AddCityComponent], // The second component is not in use yet. Write it's selector to use it.
  bootstrap: [AppComponent]
})
export class AppModule {
}


