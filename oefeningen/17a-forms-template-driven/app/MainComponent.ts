import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
			<a routerLink="/component1">Component 1</a> | 
			<a routerLink="/component2">Component 2</a>
			<hr>
			<router-outlet></router-outlet>
		`
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
