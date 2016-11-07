// constants.ts - constants for logging in/out in the app
export class Constants {
	// public static constants - Authorization event names
	public static get AUTH_LOGIN_SUCCESS():string {
		return 'auth-login-success'
	}
	public static get AUTH_LOGOUT_SUCCESS():string {
		return 'auth-logout-success'
	}
	public static get AUTH_LOGIN_FAILED():string {
		return 'auth-login-failed'
	}

	//////////////////////////
	// NOT IMPLEMENTED YET:
	//////////////////////////
	public static get AUTH_SESSION_TIMEOUT():string {
		return 'auth-session-timeout'
	}
	public static get AUTH_NOT_AUTHENTICATED():string {
		return 'auth-not-authenticated'
	}
	public static get AUTH_NOT_AUTHORIZED():string {
		return 'auth-not-authorized'
	}
}
