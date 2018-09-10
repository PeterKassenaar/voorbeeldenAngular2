import {Pipe, PipeTransform} from '@angular/core';

// Building a Custom Pipe : use annotation @Pipe
// See official pipe documentation at https://angular.io/guide/pipes and
// https://angular.io/guide/pipes#custom-pipes for Custom Pipes
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string) {
    let image = '';

    // the value of the pipe is not empty, so an image is available
    if (value) {
      image = value;
    } else {
      image = 'no_image_available.gif';
    }
    return image;
  }
}
