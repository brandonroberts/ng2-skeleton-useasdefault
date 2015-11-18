import {Component, bootstrap, provide} from 'angular2/angular2';
import {
	RouteConfig,
	ROUTER_PROVIDERS, 
	ROUTER_DIRECTIVES,
	ROUTER_PRIMARY_COMPONENT, 
	LocationStrategy, 
	HashLocationStrategy} from 'angular2/router';



@Component({template : 'Default child'})
class Main {}


@Component({
	template : 'Main! <router-outlet></router-outlet>',
	directives : [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: 'main', component: Main, name : 'Main', useAsDefault: true}
])
class Index {}



@Component({
	selector : 'app',
	template : 'Hello world! <router-outlet></router-outlet>',
	directives : [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path : '/', redirectTo : ['Index']},
	{path : '/index/...', component: Index, name : 'Index'}
])
class App {

	constructor() {

	}
}

bootstrap(App, [
	ROUTER_PROVIDERS,
	provide(ROUTER_PRIMARY_COMPONENT, {useValue: App}),
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
