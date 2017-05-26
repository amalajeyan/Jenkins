import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink = '/'> Home </a> 
    &nbsp;
    <a routerLink = '/AlertList'> Alert List </a> 
    &nbsp;
    <a routerLink = '/CountryList'> Country List </a>
    <router-outlet> </router-outlet>
   
    
    `,
    providers: []
    
})

export class AppComponent {  
}


