// app.routes.ts
import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city-add.component";
import {CityDetailComponent} from "./city-detail.component";

export const AppRoutes: Routes = [
	{path: '', component: AppComponent},
	{path: 'home', component: AppComponent},
	{path: 'add', component: CityAddComponent},
	{path: 'detail/:id', component: CityDetailComponent}
];
