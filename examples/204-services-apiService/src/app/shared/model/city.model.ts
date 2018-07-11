export class City{
	constructor(
		public id: number,
		public name: string,
		public province: string,
		public rating: number = 0,
		public highlights?: string[]
	){	}
}

// Another way of modelling a city, more a Store/Redux approach by using Object.assign:
/*
export class City {
	id: number;
	name:string = '';
	province: string = '';
	rating: number = 0;
	highlights:string[];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}*/
