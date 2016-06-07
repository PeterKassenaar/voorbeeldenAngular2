// movie.model.ts
export interface IMovie {
	title:string;
	year:string;
	poster:string;
}

// Eventueel: export class MovieModel implements IMovie {
export class MovieModel{
	constructor(public title:string,
				public year:string,
				public poster:string) {
	}
}

