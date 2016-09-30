import {Component} from '@angular/core';

@Component({

template: `  
  <div class="ui raised segment">  
    <h2 class="ui header">Demo Form: Sku</h2>  
    <form #f="ngForm"  
          (ngSubmit)="onSubmit(f.value)"  
          class="ui form">
 
      <div class="field">  
        <label for="skuInput">SKU</label>  
        <input type="text"  
               id="skuInput"  
               placeholder="SKU"  
               name="sku" ngModel>  
      </div>
 
      <button type="submit" class="ui button">Submit</button>  
    </form>  
  </div>  `
})
export class FormSku{
 onSubmit(val:any):void{
     alert(JSON.stringify(val));
 }
}

