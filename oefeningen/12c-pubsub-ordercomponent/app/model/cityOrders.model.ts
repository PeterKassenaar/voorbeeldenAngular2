// cityOrders.model.ts
import {City} from "./city.model";
export class CityOrderModel {
	constructor(public city:City,
				public numBookings:number = 1) {
	}
}