import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

// Router
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';

// Services
import {WikipediaService} from './services/wikipedia.service';

// Components
import {MainComponent} from './MainComponent';
import {AppComponent1} from './component1/app.component1';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [WikipediaService],
  declarations: [
    MainComponent,
    AppComponent1
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
