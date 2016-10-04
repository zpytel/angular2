import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from '../heroes/heroes.component';
import {HomeComponent} from '../home/home.component'
import {FormSku} from '../form/form.sku';

const appRoutes:Routes=[
{
    path:"heroes",
    component:HeroesComponent

},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
    path:"home",
    component:HomeComponent
    
},
{
    path:"forms",
    component:FormSku
}

];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);