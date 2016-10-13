import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';

import {AppModule} from './app.module';

platformBrowserDynamic()
	.bootstrapModule(AppModule, [
		FormsModule
	]);
