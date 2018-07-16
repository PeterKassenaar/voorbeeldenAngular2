import {Component, OnInit} from '@angular/core';
import {City} from './shared/models/city.model';
import {CityService} from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements  OnInit{
  // Properties to be shown inside the component, using a pipe
  public cities: City[];
  public datePipe: Date       = new Date();
  public slicePipe: number[]  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public decimalPipe: number  = 91.432197790; // standaard 3 decimale tekens
  public numberPipe: number   = 42;
  public currencyPipe: number = 49.95; // In de HTML aangeven welke valutacode erbij hoort
  public jsonPipe: Object     = {'Name': "Peter Kassenaar"};
  public percentPipe: number  = 10;
  public filterCity: string   = '';


  constructor(private cityService: CityService) {
  }

  ngOnInit(){
    this.getCities();
  }


  // ***********************
  // implementation
  // ***********************
  getCities() {
    this.cityService.getCities()
      .subscribe(cityData => {
          this.cities            = cityData;	// 1. success handler
        },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting cities complete...')	// 3. complete handler
      )

  }
}
