// canDeactivateGuard.ts
import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {CanDeactivateComponent} from "../../canDeactivateComponent";

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

	canDeactivate(target:CanDeactivateComponent) {
		// Can the user deactivate the route? Test for changes here!
		// For now, return Yes|Nope from the browser confirm dialog.
		if (target.hasChanges()) {
			return window.confirm('Do you really want to cancel? There might be unsaved changes.');
		}
		return true;
	}
}
