// movie.model.ts
export interface IMovie {
	titel:string;
	jaar:string;
	afbeelding:string;
}

// Eventueel: export class MovieModel implements IMovie {
export class MovieModel{
	constructor(public titel:string,
				public jaar:string,
				public afbeelding:string) {
	}
}

