import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar',
  standalone: true
})
export class OrdenarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
