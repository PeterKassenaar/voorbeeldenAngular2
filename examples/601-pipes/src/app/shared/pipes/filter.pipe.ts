import {Pipe, PipeTransform} from '@angular/core';

// Building a Custom Pipe : use annotation @Pipe
// See official pipe documentation at https://angular.io/guide/pipes and
// https://angular.io/guide/pipes#custom-pipes for Custom Pipes
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], args: any[]) {
    // 1. return value unchanged if no arguments (i.e. no filter criteria) are given
    if (!args) {
      return value;
    }

    // 2. array and filter criteria are present. Filter array:
    if (value) {
      // Make case insensitive
      const searchFilter = args[0].toLowerCase();

      // filter every item from array that starts with the given character
      return value.filter((item) => item.name.toLowerCase().startsWith(searchFilter));
    }
    return;
  }
}
