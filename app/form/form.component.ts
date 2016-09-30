import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'my-form',
    template:`
    {{text}} welcome
    `
})
export class FormComponent{
    text:string;
showMessage():void{
    this.text="MY-Form"
}

}