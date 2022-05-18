import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'politicPipe'
})
export class PoliticPipePipe implements PipeTransform {

  transform(value: any, format='short'): any {
    if(format == 'short') {
      if( value == 10 ) return '党员'
      else if( value == 20 ) return '团员'
      else if( value == 30 ) return '群众'
    } else if(format == 'long') {
      if( value == 10 ) return '共产党员'
      else if( value == 20 ) return '共青团员'
      else if( value == 30 ) return '一般群众'
    }
  }

}
