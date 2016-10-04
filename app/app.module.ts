import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {routing} from './routing/app.routing';
import {HeroesComponent} from './heroes/heroes.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component'
import {FormSku} from './form/form.sku';
import { HttpModule } from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemHeroService} from './service/in-mem-hero-service';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemHeroService)
     ],
  declarations: [
     AppComponent ,
     HeroesComponent,
     HomeComponent,
     FormComponent,
     FormSku
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
