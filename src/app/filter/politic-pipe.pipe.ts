import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'politicPipe'
})
export class PoliticPipePipe implements PipeTransform {

<<<<<<< HEAD
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
=======
  transform(val:number, format = 'short'): any {
    switch(val) {
      case 10 :
        return format === 'short'? "党员" : "中共党员";
      case 20:
        return format === 'short'? "团员" : "中共团员";
      case 30:
        return format === 'short'? "群众" : "一般群众";
    };

>>>>>>> 20984e862c6fdf94aa00f4df1a14e2e345077474
  }

}
