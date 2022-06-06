import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Components
import {AppComponent} from './AppComponent';
import {AppComponent1} from './component1/app.component1';
import {AppComponent2} from './component2/app.component2';
import {AppComponent3} from './component3/app.component3';
import { PasswordConfirmDirective } from './directives/password-confirm.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    AppComponent,
    AppComponent1,
    AppComponent2,
    AppComponent3,
    PasswordConfirmDirective // used in Component 3
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
