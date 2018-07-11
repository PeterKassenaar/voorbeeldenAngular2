// session service. instellen & opvragen huidige ingelogde gebruiker
import {User} from "../model/user.model";
export class SessionService {
	private currentUser: User = null;

	get user() {
		return this.currentUser;
	}

	create(userName: string, token: string) {
		// nieuwe user aanmaken. Voor nu even hardcoded id:1 opgeven.
		this.currentUser = new User(1, userName, null, token);
	}

	destroy() {
		this.currentUser = null;
	}

	isLoggedIn() {
		return !!this.currentUser;
	}
}
