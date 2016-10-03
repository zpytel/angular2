import {Component} from '@angular/core';
import {Input,Output,EventEmitter} from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'my-form',
    template:`
    {{text}} welcome
    <button (click)="clicked()">Click Me</button>
    `
})
export class FormComponent{
    @Input()
    value:string;
    @Output()
    eve=new EventEmitter<string>();
    text:string;
showMessage():void{
    this.text="MY-Form " + this.value;
    
}
clicked():void{
    this.eve.emit("You clicked me");
}

}