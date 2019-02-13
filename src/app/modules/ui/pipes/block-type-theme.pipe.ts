import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blockTypeTheme'
})
export class BlockTypeThemePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
