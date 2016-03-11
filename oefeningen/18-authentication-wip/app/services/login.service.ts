import {Subject} from "rxjs/Subject";
import {Injectable} from "angular2/core";

@Injectable()
export class LoginService{
	Stream: Subject<string>;

	constructor(){
		this.Stream = new Subject();
	}
}