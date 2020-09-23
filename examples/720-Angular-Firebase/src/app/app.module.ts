import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {UpdateComponent} from './update/update.component';

// Import firebase stuff
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

// Router and Forms stuff
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";

// Initialize Routes
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'update/:id', component: UpdateComponent},
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    // initialize firebase app
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // initialize router
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
