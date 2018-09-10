// city.detail.component.ts
import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from './shared/model/city.model';
import {CityService} from './shared/services/city.service';

// import {RouteParams} from "@angular/router"; // OLD way
import {ActivatedRoute} from '@angular/router'; // NEW way
import {Subscription} from 'rxjs';
import {map, catchError, delay} from 'rxjs/operators';

@Component({
    selector: 'city-detail',
    template: `<h1>City Detail</h1>
    <h2>Details for city: {{ id }}</h2>
    <h2>Name for city: {{ name }}</h2>

    <!--<div *ngIf="currentCity | async as currentCity; else loading">-->
    <!--<h2>Details for city: {{ currentCity.name }}</h2>-->
    <!--<ul class="list-group">-->
    <!--<li class="list-group-item">Naam: {{ currentCity.name }}</li>-->
    <!--<li class="list-group-item">Provincie: {{ currentCity.province }}</li>-->
    <!--<li class="list-group-item">Highlights: {{ currentCity.highlights }}</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--&lt;!&ndash;- Template for loading data -&ndash;&gt; -->
    <!--<ng-template #loading>-->
    <!--<h2>Angular - else templates</h2>-->
    <!--<h3>loading user data...</h3>-->
    <!--<img src="../assets/loading_spinner.gif" alt="loading indicator...">-->
    <!--</ng-template>-->

    `
})
export class CityDetailComponent implements OnInit, OnDestroy {
    id: string;
    name: string;
    currentCity: City;
    private sub: Subscription; // pointer to subscription on Route

    constructor(private route: ActivatedRoute, private cityService: CityService) {
        // Credits: http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html
        // ActivatedRoute comes with a 'params' property which is an Observable.
        // To access the property 'id', all we have to do is to subscribe to
        // the parameters Observable changes.
    }

    ngOnInit() {
        // OLD:
        // this.id = this.route.get('id');

        // NEW:
        this.sub = this.route.params.subscribe((params: any) => {
            this.id = params.id;
        });

        // OR:
        // Work via Router-snapshot:
        // Sometimes we’re not interested in future changes of a route parameter.
        // All we need the id and once we have it, we can provide the data we want to provide.
        // In this case, an Observable can bit a bit of an overkill.
        // A *snapshot* is simply a snapshot representation of the activated route.
        // this.id = this.route.snapshot.params['id'];
        // this.name = this.route.snapshot.params['name'];

        // NEW, with fetching details via Service and using switchMap():
        // this.currentCity = this.route.params
        //     .delay(2000)
        //     .map(params => params['id'])
        //     .switchMap(id => this.cityService.getCity(id))
    }

    ngOnDestroy() {
        // If subscribed, we must unsubscribe before Angular destroys the component.
        // Failure to do so could create a memory leak.
        this.sub.unsubscribe();
    }
}
