// 1. Import bootstrapping dependencies
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// 2. Import or own  module
import {AppModule} from './app.module';

// 3. Bootstrap our app
platformBrowserDynamic().bootstrapModule(AppModule);
