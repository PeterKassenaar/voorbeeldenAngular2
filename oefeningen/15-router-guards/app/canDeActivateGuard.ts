/**
 * Created by Peter Kassenaar on 20-7-2016.
 */
import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {CanDeactivateComponent} from "./canDeactivate.component";

@Injectable()
export  class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent>{
	constructor(){
		// typically the AuthService should be injected here and instantiated
	}

	canDeactivate(){
		// Can the user deactivate the route? Test for changes here!
		// For now, return Yes|Nope from the browser confirm dialog.
		return window.confirm('Do you really want to cancel? There might be unsaved changes.');
	}
}