import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {City} from '../model/city';
import {map, take} from 'rxjs/operators';

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
    this.initCities();
  }

  initCities(): void {
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

  // get a single city, based on Id
  getCity(cityId): any {
    return this.citiesCollection.doc(cityId).snapshotChanges();
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

  // update a city
  updateCity(cityKey, value): void {
    // Example on updating an existing city. We first get a reference to
    // the city document using its ID (i.e. cityKey), then use .set()
    // and merge the current value.
    // If we don't use merge, the document will
    // be overwritten entirely. This is a choice.
    this.citiesCollection
      .doc(cityKey)
      .set(value, {merge: true});

    // re-initialize the cities$ to reflect the current changes.
    // Question: this can be done more elegantly. How?
    this.initCities();
  }

  sortCities(): any {
    // TODO
  }
}
