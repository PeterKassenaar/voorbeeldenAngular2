// Credits: http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0
//import {CustomEventEmitter} from "./custom-event-emitter";
import {Subject} from "rxjs/Subject";
import {Injectable} from "angular2/core";

@Injectable()
export class PubSubService {
	Stream:Subject; // Hier: rechtstreeks Subject gebruikt in plaat van CustomEventEmitter wrapper-class voor Service, zoals in artikel

	constructor() {
		this.Stream = new Subject();
	}
}