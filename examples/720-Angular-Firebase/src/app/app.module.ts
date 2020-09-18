import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';

// 1. import firebase stuff
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

// Router stuff
import {RouterModule, Routes} from '@angular/router';

// Initialize Routes
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    // initialize firebase app
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // initialize router
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
