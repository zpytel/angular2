import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
    `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <a routerLink="/home">Home</a>
    <router-outlet></router-outlet>

    `
})
export class AppComponent { 
    title="zibi was here";
}
