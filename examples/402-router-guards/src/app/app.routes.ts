// app.routes.ts
import {Routes} from '@angular/router';

// Components
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city-add.component";
import {CityDetailComponent} from "./city-detail.component";
import {LoginComponent} from "./login/login.component";

// Guards
import {CanActivateViaAuthGuard} from "./shared/guards/canActivateViaAuthGuard";
import {CanDeactivateComponent} from "./canDeactivateComponent";
import {CanDeactivateGuard} from "./shared/guards/canDeactivateGuard";

export const AppRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'home',
        component: AppComponent,
        canActivate: ['CanAlwaysActivateGuard'] // Function, defined in app.module.ts
    },
    {
        path: 'add',
        component: CityAddComponent,
        canActivate: [CanActivateViaAuthGuard]
    },
    {
        path: 'deactivate',
        component: CanDeactivateComponent,
        canDeactivate: [CanDeactivateGuard]
    },
    {
        path: 'detail/:id',
        component: CityDetailComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
