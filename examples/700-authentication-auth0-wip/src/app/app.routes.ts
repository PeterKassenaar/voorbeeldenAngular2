// app.routes.ts
import {Routes, CanActivate} from '@angular/router';
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add.component";
import {CityDetailComponent} from "./city.detail.component";
import {AuthGuard} from "./auth/auth.guard";

export const AppRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'home', component: AppComponent},
    {
        path: 'add',
        component: CityAddComponent,
        canActivate: [AuthGuard]
    },
    {path: 'detail/:id', component: CityDetailComponent}
];
