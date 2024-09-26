import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

//********************
// Example 1. Function to match passwords
//********************
function passwordMatcher(control: AbstractControl) {
  return control.get('password')?.value === control.get('confirm')?.value
    ? null : {'nomatch': true};
  // we *could*  return just true/false here, but by returning an object
  // we're more flexible in composing our validators.

}

//********************
// Example 2: Function to validate email
//********************
function validateEmail(control: AbstractControl) {
  let email = control.get('email')?.value;
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
    ? null : {'no valid email': true};
}

//********************
// (documentation: https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)
// Example 3: Using multiple custom validators on a form? You have to call
// *one* validatorFunction that does all validations and returns its results.
// For example like :
//********************
function validateForm(control: AbstractControl) {
  return {
    'match passwords': passwordMatcher(control),
    'valid email': validateEmail(control)
  }
}

// Class Decorator
@Component({
  selector: 'component2',
  templateUrl: 'app.component2.html'
})

// Class
export class AppComponent2 implements OnInit {

  myReactiveForm: FormGroup = this.formBuilder.group({}); // empty group, redefined in ngOnInit()
  showEmailValidationMessage?: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // 1. Define the model of Reactive Form.
    this.myReactiveForm = this.formBuilder.group({
      email: ['', Validators.required],
      // 2. In Newer versions of Angular the Validators.compose() method is not required anymore.
      //  We can send in a comma-separated list of Validator functions.
      //  See https://angular.io/guide/form-validation#validating-input-in-reactive-forms for more details
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      customer: this.formBuilder.group({
        prefix: ``,
        firstName: ``,
        lastName: ``
      })
    }, {validator: passwordMatcher}); // pass in the validator function. NOT required in newer versions of Angular.

    // Validating the email field by subscribing to it.
    // We set it to 'required' in the
    // model above.
    this.myReactiveForm.get('email')?.valueChanges
      .subscribe(data => {
        this.checkEmail();
      })
  }

  onSubmit() {
    console.log('Form submitted: ', this.myReactiveForm?.value);
    // alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
    // TODO: do something useful with form
  }

  checkEmail() {
    console.log('Email checked....');
    this.showEmailValidationMessage = !this.myReactiveForm?.get('email')?.valid &&
      (this.myReactiveForm?.get('email')?.dirty ||
        this.myReactiveForm?.get('email')?.touched)
  }

}

