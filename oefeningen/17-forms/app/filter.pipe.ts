import {Pipe} from  'angular2/core';

// Custom Pipe maken: gebruik annotatie @Pipe
@Pipe({
	name: 'filter'
})
export class FilterPipe{
	transform(value:any[], args: any[]){
		if(value){
			// hoofdletterONafhankelijk maken
			let searchFilter = args[0].toLowerCase();
			return value.filter((item) => item.name.toLowerCase().startsWith(searchFilter));
		}
		return;
	}
}
