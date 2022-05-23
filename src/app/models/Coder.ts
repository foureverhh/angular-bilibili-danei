class Emp {
    private _name: string = '';
    salary: number = 0;
    protected _empCode: number = 0;

    set empName(value: string) {
        this._name = value;
    }

    get empName(){
        return this._name;
    }

    set empCode(value: number) {
        this._empCode = value;
    }

    get empCode() {
        return this._empCode;
    }

}

class Coder extends Emp {
    language: string = 'java';
    
    empCodeChange() {
        this.empCode = 1;
    }
}
let emp = new Emp();
console.log('emp empCode: ' + emp.empCode);
let coder = new Coder();
console.log('coder empCoder: ' + coder.empCode);
coder.empCodeChange();
console.log('coder empCoder: ' + coder.empCode);
coder.empName = 'John';
coder.language = 'ts';
coder.salary = 1000;
