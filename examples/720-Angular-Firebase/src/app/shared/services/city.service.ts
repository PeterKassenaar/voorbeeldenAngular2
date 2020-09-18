import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {City} from '../model/city';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  // variables
  cities$: Observable<City[]>;
  citiesCollection: AngularFirestoreCollection<City>;
  cityDoc: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) {
    this.citiesCollection = this.db.collection('cities');
    // We COULD use .valueChanges() here, but by taking a snapshot, we also
    // have access to the metadata of the collecion (i.e. the id). So we don't do this:
    // this.cities$ = this.db.collection(environment.cities_endpoint).valueChanges();
    // Instead, we do this:
    this.cities$ = this.citiesCollection.snapshotChanges()
      .pipe(
        map(cities => {
          // get the auto-generated ID from the document and add it to the interface
          return cities.map(city => {
            const data = city.payload.doc.data() as City;
            data.id = city.payload.doc.id;
            console.log(data);
            return data;
          });
        })
      );
  }

  // get all cities
  getCities(): Observable<City[]> {
    return this.cities$;
  }

  // add a city
  addCity(city: City): void {
    this.citiesCollection.add(city);
  }

  // remove a city
  removeCity(id: string): void {
    // get a reference to the city document in the database
    this.cityDoc = this.db.doc<City>(`cities/${id}`);

    // call the delete method on the city document
    this.cityDoc.delete();
  }

  updateCity(): any {
    // TODO
  }

  sortCities(): any {
    // TODO
  }
}
