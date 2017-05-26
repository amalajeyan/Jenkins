"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var countrylist_component_1 = require("./components/countrylist.component");
var country_list_item_component_1 = require("./components/country.list.item.component");
var country_service_1 = require("./services/country.service");
var country_routing_module_1 = require("./country-routing.module");
var CountryModule = (function () {
    function CountryModule() {
    }
    return CountryModule;
}());
CountryModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, country_routing_module_1.CountryRoutingModule],
        declarations: [countrylist_component_1.CountryListComponent, country_list_item_component_1.CountryListItemComponent],
        providers: [country_service_1.CountryService]
    })
], CountryModule);
exports.CountryModule = CountryModule;
//# sourceMappingURL=country.module.js.map