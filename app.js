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
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var Main = (function () {
    function Main() {
    }
    Main = __decorate([
        angular2_1.Component({ template: 'Default child' }), 
        __metadata('design:paramtypes', [])
    ], Main);
    return Main;
})();
var Index = (function () {
    function Index() {
    }
    Index = __decorate([
        angular2_1.Component({
            template: 'Main! <router-outlet></router-outlet>',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: 'main', component: Main, name: 'Main', useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], Index);
    return Index;
})();
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            template: 'Hello world! <router-outlet></router-outlet>',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: ['Index'] },
            { path: '/index/...', component: Index, name: 'Index' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: App }),
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
