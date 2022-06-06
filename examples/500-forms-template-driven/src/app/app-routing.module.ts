import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent1} from "./component1/app.component1";
import {AppComponent3} from "./component3/app.component3";
import {AppComponent2} from "./component2/app.component2";
import {AppComponent4} from "./component4/app.component4";

const routes: Routes = [
  {path: '', component: AppComponent1}, // Do *not* put MainComponent here , otherwise component would be loaded into itself
  {path: 'component1', component: AppComponent1},
  {path: 'component2', component: AppComponent2},
  {path: 'component3', component: AppComponent3},
  {path: 'component4', component: AppComponent4}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
