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
var country_service_1 = require("../services/country.service");
var CountryListComponent = (function () {
    function CountryListComponent(countryService) {
        this.countryService = countryService;
        this.countryLabel = 'List of Countries';
    }
    CountryListComponent.prototype.getCountryData = function () {
        var _this = this;
        this.countryService.getCountryData().then(function (countrylist) { return _this.countries = countrylist; });
    };
    CountryListComponent.prototype.ngOnInit = function () {
        this.getCountryData();
    };
    return CountryListComponent;
}());
CountryListComponent = __decorate([
    core_1.Component({
        selector: 'country-list',
        template: "\n            <h1> {{countryLabel}}</h1>\n          <table>\n         <li *ngFor = \"let country of countries\" > \n                  <country-item [country] = \"country\" > </country-item>\n                </li>\n           </table> "
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService])
], CountryListComponent);
exports.CountryListComponent = CountryListComponent;
//# sourceMappingURL=countrylist.component.js.map