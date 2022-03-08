import { NgModule, Pipe } from "@angular/core";

@Pipe({
    name : 'gender',    
})
export class GenderPipe {
    transform(val: any): any {
        if(val == 1) {
            return 'Man';
        }else if(val == 0) {
            return 'Woamn';
        }
    }
}