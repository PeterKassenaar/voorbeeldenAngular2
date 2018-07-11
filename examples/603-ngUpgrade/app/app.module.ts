import {UpgradeAdapter} from 'angular2/upgrade';
import {CityComponent} from 'app/city.component';

declare var angular:any;
const upgradeAdapter:UpgradeAdapter = new UpgradeAdapter();

// De Angular 2-component CityComponent binnen de Angular 1-applicatie bekend maken als directive.
// Gebruik hiervoor upgradeAdapter.downgradeNg2Component(CityComponent)
angular.module('myApp')
	.directive('cityComponent',
		upgradeAdapter.downgradeNg2Component(CityComponent));

// De Angular 1-applicatie bootstrappen op de body. 'myApp' is al gedefinieerd in index.html
upgradeAdapter.bootstrap(document.body, ['myApp']);