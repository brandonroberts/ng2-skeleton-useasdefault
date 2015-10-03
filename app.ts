/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';
import {ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';

@Component({
	selector : 'app'
})
@View({
	template : 'Hello world!'
})
class App {

	constructor() {

	}
}

bootstrap(App, [
	HTTP_BINDINGS,
	ROUTER_BINDINGS,
	bind(ROUTER_PRIMARY_COMPONENT).toValue(App)
]);
