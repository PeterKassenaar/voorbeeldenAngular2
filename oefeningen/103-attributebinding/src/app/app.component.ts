import {Component} from '@angular/core';
import {City} from './shared/city.model';

@Component({
    selector   : 'hello-world',
    templateUrl: 'app.html'
})

// Class met properties, array met cities
// push nieuwe city op de array
export class AppComponent {
    // Properties voor de component/class
    name: string = 'Peter Kassenaar';

    cities: City[] = [
        new City(1, 'Groningen', 'Groningen'),
        new City(2, 'Hengelo', 'Overijssel'),
        new City(3, 'Den Haag', 'Zuid-Holland'),
        new City(4, 'Enschede', 'Overijssel'),
    ];
    textVisible: boolean = true;


    // City toevoegen aan de array
    addCity(txtCity) {
        console.log(txtCity);
        let newID = this.cities.length + 1;
        let newCity = new City(newID, txtCity.value, 'Onbekend');
        this.cities.push(newCity);
        txtCity.value = '';
    }

    // attribuut toggelen: tekst zichtbaar/onzichtbaar maken.
    toggleText() {
        this.textVisible = !this.textVisible;
    }
}