import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from '../heroes/heroes.component';
import {HomeComponent} from '../home/home.component'

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
    
}

];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);