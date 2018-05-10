// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Service
import { CityService } from './shared/services/city.service';
import { OrderService } from './shared/services/order.service';

// Custom Components
import { AppComponent } from './app.component';
import { CityDetail } from './city.detail';
import { CityOrders } from './city.orders';

// Module declaration
@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, CityDetail, CityOrders],
  bootstrap: [AppComponent],
  providers: [CityService, OrderService]
})
export class AppModule {}
