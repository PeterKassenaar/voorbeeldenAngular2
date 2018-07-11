// login.module.ts

// This is the Login Component in it's own module, to be reused in other apps.
// It is of course overkill in this case to wrap a single (login) Component inside its own
// module, but is used here as a proof-of-concept.

// 1. Import NgModule stuff
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// 2. Import Services & Guards
import {LoginComponent} from "../components/login.component";

// 3. Declare module. Import and Export CommonModule and components inside this module (in this case only the LoginComponent).
@NgModule({
	imports     : [CommonModule],
	exports     : [
		CommonModule,
		LoginComponent
	],
	declarations: [LoginComponent]
})
export class LoginModule {
}


