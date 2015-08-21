var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var http_1 = require('angular2/http');
var AllComponents_1 = require('js/route/AllComponents');
var RouteItem_1 = require('js/model/RouteItem');
var Menu_1 = require('js/route/Menu');
var NavigationService_1 = require('js/service/NavigationService');
var TaskAppComponent = (function () {
    function TaskAppComponent(router, location, registry, navigationService) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.ready = false;
        this.menuItems = [];
        navigationService.loadConfigData().then(function (data) {
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
                    }, false);
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
        angular2_1.Component({
            selector: 'my-app',
        }),
        angular2_1.View({
            templateUrl: '../html/app.html',
            directives: [router_2.RouterLink, router_2.RouterOutlet, angular2_1.NgIf, Menu_1.Menu]
        }),
        __param(0, angular2_1.Inject(router_2.Router)),
        __param(1, angular2_1.Inject(router_2.Location)),
        __param(2, angular2_1.Inject(router_1.RouteRegistry)),
        __param(3, angular2_1.Inject(NavigationService_1.NavigationService)), 
        __metadata('design:paramtypes', [(typeof Router !== 'undefined' && Router) || Object, (typeof Location !== 'undefined' && Location) || Object, (typeof RouteRegistry !== 'undefined' && RouteRegistry) || Object, NavigationService_1.NavigationService])
    ], TaskAppComponent);
    return TaskAppComponent;
})();
angular2_1.bootstrap(TaskAppComponent, [NavigationService_1.NavigationService, AllComponents_1.AllComponents, http_1.httpInjectables, router_1.routerInjectables, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
