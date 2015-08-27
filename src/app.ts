/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

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

bootstrap(App);
