import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

platformBrowserDynamic()
	.bootstrapModule(AppModule);
