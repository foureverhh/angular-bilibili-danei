import { NgModule, Pipe } from "@angular/core";

@Pipe({
    name : 'gender',
})
export class GenderPipe {
    transform(val: any, lang = 'zh'): any {

        if(val == 1) {
            return lang == 'en'?'Man':'男';
        }else if(val == 0) {
            return lang == 'en'?'Woman':'女';
        }
    }
}
