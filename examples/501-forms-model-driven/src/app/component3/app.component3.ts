import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


// Class Decorator
@Component({
  selector: 'app-component3',
  templateUrl: 'app.component3.html'
})

// Class
// tslint:disable-next-line:component-class-suffix
export class AppComponent3 implements OnInit {

  myReactiveForm?: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // 1. Define the model of Reactive Form.
    this.myReactiveForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  onSubmit() {
    if (this.myReactiveForm) {
      console.log('Form submitted: ', this.myReactiveForm.value);
      alert('Form submitted! :: ' + JSON.stringify(this.myReactiveForm.value));
      // TODO: do something useful with form
    }
  }
}

