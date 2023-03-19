import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsList'
})
export class ItemsListPipe implements PipeTransform {

  public transform(value: string[]): unknown {
    return value?.join(', ');
  }

}
