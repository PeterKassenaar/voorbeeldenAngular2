// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Router
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';

// Service
import { CityService } from './shared/services/city.service';
import { AuthService } from './shared/services/auth.service';

// Guard
import { CanActivateViaAuthGuard } from './shared/guards/canActivateViaAuthGuard';
import { CanDeactivateGuard } from './shared/guards/canDeactivateGuard';

// Inline providers/function not possible anymore. This
// function is used inside providers: []
export function guardFunction() {
  console.log('Route requested');
  return true; // do validation or other stuff here
}

// Components
import { MainComponent } from './MainComponent';
import { AppComponent } from './app.component';
import { CityAddComponent } from './city-add.component';
import { CityDetailComponent } from './city-detail.component';
import { CanDeactivateComponent } from './canDeactivateComponent';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    MainComponent,
    AppComponent,
    CityAddComponent,
    CityDetailComponent,
    CanDeactivateComponent,
    LoginComponent
  ],
  providers: [
    CityService,
    AuthService,
    {
      provide: 'CanAlwaysActivateGuard', // Guard as a function
      useValue: guardFunction
    },
    CanActivateViaAuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [MainComponent]
})
export class AppModule {}
