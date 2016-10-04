import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import {Hero} from '../hero';

@Injectable()
export class HeroService {
    
    constructor(private http:Http) { }

getHeroes():Promise<Hero[]>{
let api="app/heroes";

return this.http
.get(api)
.toPromise()
.then(response=>response.json().data as Hero[])
.catch(this.handleError)
    }



    handleError(error:any){
        console.error("an error occured",error);
        return Promise.reject(error.message||error);
    }


}