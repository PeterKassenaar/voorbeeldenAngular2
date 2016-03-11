// session service. instellen & opvragen huidige ingelogde gebruiker
import {User} from "../model/user.model";
export class SessionService {
	private _currentUser:User;

	get user() {
		return this._currentUser;
	}

	create(userName:string, token:string) {
		// nieuwe user aanmaken. Voor nu even hardcoded id:1 opgeven.
		this._currentUser = new User(1, userName, null, token);
	}

	destroy() {
		this._currentUser = null;
	}
}
