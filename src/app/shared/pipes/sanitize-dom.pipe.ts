import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeDom'
})
export class SanitizeDomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
