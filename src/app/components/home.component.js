"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var title = '';
var HEROES = [
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
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.title = "hi";
    }
    HomeComponent.prototype.clickMe = function () {
        this.title = 'Tour of Heroes ' + new Date();
    };
    Object.defineProperty(HomeComponent.prototype, "output", {
        get: function () { return JSON.stringify(this.hero); },
        enumerable: true,
        configurable: true
    });
    ;
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: '',
        template: "\n  \n    \n    <h1>{{title}}</h1>\n    <h2>{{hero.name}} details!</h2>\n  \n    <router-outlet> </router-outlet>\n    <div><label>id: </label>{{hero.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\" (click) = \"OnClick()\">\n       <ul>\n      <li *ngFor=\"let hero of heroes\">\n        <span  > {{hero.name}} </span>\n      </li>\n    </ul>\n    </div>\n    <button (click)=\"clickMe()\"  > Click Me </button>\n    {{output}}\n    ",
        providers: []
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map