import {Component} from '@angular/core';

@Component({
    template:`
    <h1>I'm in homeff</h1>
    <button (click)="mycomp.showMessage()">Click</button>
    <my-form #mycomp></my-form>
    <input #e value="zibi">
    {{e.value}}
    `
    
})
export class HomeComponent{}