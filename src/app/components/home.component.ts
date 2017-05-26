import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}

const title = '';
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];



@Component({
  selector: '',
  template: `
  
    
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
  
    <router-outlet> </router-outlet>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name" (click) = "OnClick()">
       <ul>
      <li *ngFor="let hero of heroes">
        <span  > {{hero.name}} </span>
      </li>
    </ul>
    </div>
    <button (click)="clickMe()"  > Click Me </button>
    {{output}}
    `,
    providers: []
    
})
export class HomeComponent {
  title : string = 'Tour of Heroes';
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  clickMe() 
  {
    this.title = 'Tour of Heroes ' + new Date();
  }

  get output() {return JSON.stringify(this.hero)};

  constructor(){
    this.title = "hi";
  }
}


