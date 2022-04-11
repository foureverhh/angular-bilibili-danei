import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'politicPipe'
})
export class PoliticPipePipe implements PipeTransform {

  transform(val:number, format = 'short'): any {
    switch(val) {
      case 10 :
        return format === 'short'? "党员" : "中共党员";
      case 20:
        return format === 'short'? "团员" : "中共团员";
      case 30:
        return format === 'short'? "群众" : "一般群众";
    };

  }

}
