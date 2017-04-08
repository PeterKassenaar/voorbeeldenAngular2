// app.module.ts
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Service
import {CityService} from "./shared/services/city.service";
import {AuthService} from "./shared/services/auth.service";

// Components
import {MainComponent}  from './MainComponent';
import {AppComponent}  from './app.component';
import {CityAddComponent}  from './city.add.component';
import {CityDetailComponent}  from './city.detail.component';
import {CanDeactivateComponent} from "./canDeactivateComponent";

// Guards
import {CanActivateViaAuthGuard} from "./shared/guards/canActivateViaAuthGuard";
import {CanDeactivateGuard} from "./shared/guards/canDeactivateGuard";

// Inline providers/function not possible anymore. This
// function is used inside providers: []
function guardFunction() {
    console.log("Route requested");
    return true; // do validation or other stuff here
}

@NgModule({
    imports     : [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        MainComponent,
        AppComponent,
        CityAddComponent,
        CityDetailComponent,
        CanDeactivateComponent
    ],
    providers   : [
        CityService,
        {
            provide : 'CanAlwaysActivateGuard',	// Guard as a function
            useValue: guardFunction
        },
        AuthService,
        CanActivateViaAuthGuard,
        CanDeactivateGuard
    ],
    bootstrap   : [
        MainComponent
    ]
})
export class AppModule {
}
