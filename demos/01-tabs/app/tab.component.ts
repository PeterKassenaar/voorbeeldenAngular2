import {Component, Input} from 'angular2/core';
import {Tabs} from "./tabs.component";

@Component({
	selector: 'tab',
	template: `
		<div [hidden]="!active">
			<ng-content></ng-content>
		</div>
	`
})

export class Tab {
	@Input() tabTitle;
	active : boolean;

	constructor(tabs:Tabs){
		tabs.addTab(this); // This injected the PARENT-instance of the tabs-component!
	}
}