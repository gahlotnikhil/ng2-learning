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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var AllComponents_1 = require('./js/route/AllComponents');
var RouteItem_1 = require('./js/model/RouteItem');
var Menu_1 = require('./js/route/Menu');
var NavigationService_1 = require('./js/service/NavigationService');
var TaskAppComponent = (function () {
    //constructor(router: Router ) {
    function TaskAppComponent(router, location, registry, navigationService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.ready = false;
        this.menuItems = [];
        navigationService.loadConfigData().subscribe(function (data) {
            var confData = [];
            data.forEach(function (item) {
                var confObj = {
                    "component": item.component,
                    "path": item.path,
                    "as": item.as,
                };
                confData.push(confObj);
            });
            // Add route config here
            router.config(confData);
            // Add child routes
            data.forEach(function (item) {
                var childRouteItems = [];
                var defaultChild = undefined;
                item.childRouteItems.forEach(function (child) {
                    defaultChild = child;
                    // Register child routes
                    registry.config(item.component, {
                        "component": child.component,
                        "path": child.path,
                        "as": child.as,
                    });
                });
                var rlink = item.as;
                var rpath = item.path;
                if (defaultChild) {
                    rlink = rlink + '/' + defaultChild.as;
                }
                _this.menuItems.push(new RouteItem_1.RouteItem(item.component, item.name, rlink, rpath, item.label));
            });
            _this.ready = true;
        });
    }
    TaskAppComponent.prototype.getLinkStyle = function (path) {
        return this.location.path() === path;
    };
    TaskAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'client/html/app.html',
            directives: [router_deprecated_2.RouterLink, router_deprecated_2.RouterOutlet, Menu_1.Menu]
        }),
        __param(0, core_1.Inject(router_deprecated_2.Router)),
        __param(1, core_1.Inject(common_1.Location)),
        __param(2, core_1.Inject(router_deprecated_1.RouteRegistry)),
        __param(3, core_1.Inject(NavigationService_1.NavigationService)), 
        __metadata('design:paramtypes', [router_deprecated_2.Router, common_1.Location, router_deprecated_1.RouteRegistry, NavigationService_1.NavigationService])
    ], TaskAppComponent);
    return TaskAppComponent;
}());
platform_browser_dynamic_1.bootstrap(TaskAppComponent, [router_deprecated_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, common_1.CORE_DIRECTIVES, NavigationService_1.NavigationService, AllComponents_1.AllComponents, core_1.bind(common_1.LocationStrategy).toClass(common_1.HashLocationStrategy)]);
// bootstrap(TaskAppComponent, [NavigationService, AllComponents, httpInjectables, routerInjectables, bind(LocationStrategy).toClass(HashLocationStrategy)]);
//# sourceMappingURL=app.js.map