import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {routing} from './routing/app.routing';
import {HeroesComponent} from './heroes/heroes.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [ BrowserModule,FormsModule,routing ],
  declarations: [
     AppComponent ,
     HeroesComponent,
     HomeComponent
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
