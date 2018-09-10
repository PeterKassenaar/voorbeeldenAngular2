export class City{
	constructor(
		public id: number,
		public name: string,
		public province: string,
		public rating : number,
		public image: string = null,
		public highlights?: string[]
	){	}
}
