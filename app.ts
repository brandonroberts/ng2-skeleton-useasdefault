import {Component, bootstrap, provide} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';

@Component({
	selector : 'app',
	template : 'Hello world!'
})
class App {

	constructor() {

	}
}

bootstrap(App, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(ROUTER_PRIMARY_COMPONENT, {useValue:App})
]);
