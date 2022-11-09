import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'antiTitleCase'
})
export class AntiTitleCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      const [first, ...rest] = value;
      return `${first.toLowerCase()}${rest.join('').toUpperCase()}`
    }
    return null;
  }

}
