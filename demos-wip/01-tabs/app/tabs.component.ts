import {Component} from 'angular2/core';
import {Tab} from "./tab.component";

@Component({
	selector: 'tabs',
	template: `
	 <h1>Tabs Demo</h1>
	 <ul class="nav nav-tabs">
	 	<li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
	 		{{tab.tabTitle}}
	 	</li>
	 </ul>
	<ng-content></ng-content>
	 `
})

export class Tabs {
	tabs:Tab[] = [];

	// Add tab to collection of tabs. It comes from child <tab>-elements!
	addTab(tab:Tab) {
		if (this.tabs.length === 0) {
			tab.active = true;
		}
		this.tabs.push(tab)
	}

	selectTab(tab:Tab) {
		this.tabs.forEach((tab)=> {
			tab.active = false
		});
		tab.active = true;
	}
}