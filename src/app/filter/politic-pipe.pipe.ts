import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'politicPipe'
})
export class PoliticPipePipe implements PipeTransform {

  transform(val:number, format = 'short'): any {
    switch(val) {
      case 10 :
        return "中共党员";
      case 20:
        return "中共团员";
      case 30:
        return "一般群众"
    };

  }

}
