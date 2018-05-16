import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../model/city.model';

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {}

  // retourneer alle cities
  getCities(): Observable<City[]> {
    return this.http.get<City[]>('assets/data/cities.json');
  }
  
  getCity(id:number):Observable<City>{
    return this.http.get('assets/data/cities.json')
        .pipe(
            map((res:City[]) =>{
              return res.find((city:City)=>{
                return city.id === id;
              })
            })
        )
  }
}
