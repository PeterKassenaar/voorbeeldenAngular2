// app.routes.ts
import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add.component";
import {ApiComponent} from "./api.component";
import {AuthComponent} from "./auth.component";
import {CanActivateGuard} from "./guards/canActivateGuard";

export const AppRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'home', component: AppComponent},
    {
        path: 'add',
        component: CityAddComponent,
        canActivate: [CanActivateGuard]
    },
    {
        path: 'api',
        component: ApiComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    }
];
