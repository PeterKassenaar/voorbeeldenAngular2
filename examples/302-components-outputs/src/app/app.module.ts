// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Custom Components
import { AppComponent } from './app.component';
import { CityDetailComponent } from './city-detail.component';
import { CityService } from './shared/city.service';

// Module declaration
@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, CityDetailComponent],
  bootstrap: [AppComponent],
  providers: [CityService]
})
export class AppModule {}
