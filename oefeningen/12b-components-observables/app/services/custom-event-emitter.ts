// Currently not in use
import {Subject} from 'rxjs/Subject';
import {City} from "../city.model";

export class CustomEventEmitter extends  Subject<City>{
	constructor(){
		super();
	}
	emit(value){
		super.next(value);
	}
}