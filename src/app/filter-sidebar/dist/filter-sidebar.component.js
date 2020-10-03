"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilterSidebarComponent = void 0;
var core_1 = require("@angular/core");
var FilterSidebarComponent = /** @class */ (function () {
    function FilterSidebarComponent() {
        this.launchSuccess = false;
        this.landSuccess = true;
    }
    FilterSidebarComponent.prototype.ngOnInit = function () {
    };
    FilterSidebarComponent.prototype.onYearClick = function (year) {
        this.launchYear = year;
        console.log(typeof (this.launchYear));
        alert("launch success " + year);
        alert("launch success " + this.launchSuccess);
        alert("land success " + this.landSuccess);
    };
    FilterSidebarComponent.prototype.onLaunchClick = function (launchFlag) {
        this.launchSuccess = launchFlag;
        alert("launch success " + this.launchSuccess);
    };
    FilterSidebarComponent.prototype.onLandClick = function (landFlag) {
        this.landSuccess = landFlag;
        alert("land success " + this.landSuccess);
    };
    FilterSidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-filter-sidebar',
            templateUrl: './filter-sidebar.component.html',
            styleUrls: ['./filter-sidebar.component.scss']
        })
    ], FilterSidebarComponent);
    return FilterSidebarComponent;
}());
exports.FilterSidebarComponent = FilterSidebarComponent;
