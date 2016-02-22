import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component';
import {PubSubService} from "./services/pubSubService";

bootstrap(AppComponent, [PubSubService]);
