// user.model.ts
export class User {
	constructor(public id:number = 1,
				public username:string = '',
				public password:string = '',
				public token?:string) {
	}
}