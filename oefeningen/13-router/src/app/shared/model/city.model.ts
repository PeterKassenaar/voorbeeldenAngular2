// city.model.ts
export class City {
	constructor(public id:number,
				public name:string,
				public province:string,
				public rating:number,
				public price: number,
				public highlights?:string[]) {
	}
}
