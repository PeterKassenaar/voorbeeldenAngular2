import {Subject} from "rxjs/Subject";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginService{
	Stream: Subject<string>;

	constructor(){
		this.Stream = new Subject<string>();
	}
}