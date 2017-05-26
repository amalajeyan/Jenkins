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
var alerts_service_1 = require("../services/alerts.service");
var AlertListComponent = (function () {
    function AlertListComponent(alertsService) {
        this.alertsService = alertsService;
        this.alertLabel = 'List of Alerts';
    }
    AlertListComponent.prototype.getAlertsData = function () {
        var _this = this;
        this.alertsService.getAlertsData().then(function (alertslist) { return _this.alerts = alertslist; });
    };
    AlertListComponent.prototype.ngOnInit = function () {
        this.getAlertsData();
    };
    return AlertListComponent;
}());
AlertListComponent = __decorate([
    core_1.Component({
        selector: 'alert-list',
        template: "\n            <h1> {{alertLabel}}</h1>\n            <h4>Pick a highlight color</h4>\n            <div>\n            <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n            <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n            <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n            </div>\n            <ul>\n                <li *ngFor = \"let alert of alerts\" > \n                  <alert-item [alert] = \"alert\" [color] = \"color\" > </alert-item>\n                </li>\n            </ul> ",
        providers: [alerts_service_1.AlertsService]
    }),
    __metadata("design:paramtypes", [alerts_service_1.AlertsService])
], AlertListComponent);
exports.AlertListComponent = AlertListComponent;
//# sourceMappingURL=alertlist.component.js.map