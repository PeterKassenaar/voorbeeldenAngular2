// app.routes.ts
import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city-add.component";

// Routing table in this application.
// The table is loaded via app.module.ts.
// If your application has a routing *module*, the routing table is
// often inside the file with the module. (as is the case with ng new <name> --routing)
export const AppRoutes: Routes = [
	{path: '', component: AppComponent},
	{path: 'home', component: AppComponent},
	{path: 'add', component: CityAddComponent},
    {
        // catch all route
        path     : '**',
        redirectTo: 'home'
    },
];
