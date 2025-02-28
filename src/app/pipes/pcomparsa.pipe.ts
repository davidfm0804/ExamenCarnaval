import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pcomparsa'
})
export class PcomparsaPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
