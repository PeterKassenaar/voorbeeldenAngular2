export class City {
	constructor(public id: number = null,
				public name: string,
				public province: string = 'N/A',
				public highlights: string[] = ['N/A']) {
	}
}