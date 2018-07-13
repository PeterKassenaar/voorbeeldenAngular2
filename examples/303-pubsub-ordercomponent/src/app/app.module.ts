// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Service
import { CityService } from './shared/services/city.service';
import { OrderService } from './shared/services/order.service';

// Custom Components
import { AppComponent } from './app.component';
import { CityDetailComponent } from './city-detail.component';
import { CityOrdersComponent } from './city-orders.component';

// Module declaration
@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, CityDetailComponent, CityOrdersComponent],
  bootstrap: [AppComponent],
  providers: [CityService, OrderService]
})
export class AppModule {}
