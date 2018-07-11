// canDeactivate.component.ts
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
    selector: 'can-deactivate',
    template: `
		<h1>Can this route be deactivated?</h1>
		<form [formGroup]="myForm">
			<input formControlName="txtInput" placeholder="type something useful..." class="input-lg"><br>
		</form>
		<div>
			<a routerLink="/home">Home (=navigate away via hyperlink)</a><br>
		</div>
		<div>
			<button class="btn btn-success" (click)="moveAway()">Navigate away via button</button>
		</div>
	`
})

// Class met properties
export class CanDeactivateComponent implements OnInit {
    // Properties voor de component/class
    myForm:FormGroup = new FormGroup({
        txtInput:new FormControl()
    });

    constructor(private route: Router) { }

    ngOnInit() {
        //...eventuele extra initialisaties
    }

    moveAway() {
        this.route.navigate(['/home']);
    }

    hasChanges(){
        return this.myForm.dirty; // return state of the form
    }
}