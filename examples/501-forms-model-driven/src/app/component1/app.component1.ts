import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl}
  from '@angular/forms';

@Component({
  selector: 'component1',
  templateUrl: 'app.component1.html'
})
export class AppComponent1 implements OnInit {

  // form variable
  myReactiveForm: FormGroup = this.formBuilder.group({}); // empty group, redefined in ngOnInit()

  // DI of the formBuilder class to construct our form
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // 1. Define the model of Reactive Form.
    // Notice the nested formBuilder.group() for group Customer
    this.myReactiveForm = this.formBuilder.group({
      email: ``,
      password: ``,
      customer: this.formBuilder.group({
        prefix: ``,
        firstName: ``,
        lastName: ``
      })
    });

    // 1a. Different notation: same effect, using new FormControl()
    // this.myReactiveForm = this.formBuilder.group({
    //     	email   : new FormControl(''),
    //     	password: new FormControl(''),
    //     	customer: this.formBuilder.group({
    //     		prefix   : new FormControl(''),
    //     		firstName: new FormControl(''),
    //     		lastName : new FormControl('')
    //     	})
    //     });

    // 1b - other, alternative notation, create a FormGroup
    // directly, without the need for .formBuilder.group().
    // AFAIK, this is yet another option to create reactive Forms.
    // this.myReactiveForm = new FormGroup({
    //   email: new FormControl(''),
    //   password: new FormControl('')
    //   // other controls...
    // })

    // 2. Subscribe to changes at form level or...
    this.myReactiveForm.valueChanges.subscribe((value) => {
      // console.log('Changes at form level: ', value);
    });

    // 3. Subscribe to changes at control level.
    this.myReactiveForm.get('email')?.valueChanges
      .subscribe((value) => {
        console.log('Changes at control level: ', value);
      });

    // 4. If you want to set default values in fields:
    // This is invalid!
    // this.myReactiveForm.get('email') = 'info@kassenaar.com ';
    // 4b.You HAVE to use .setValue() or .patchValue():
    // this.setDefault();
  }

  onSubmit() {
    console.log('Form submitted: ', this.myReactiveForm.value);
    alert('Form submitted!' + JSON.stringify(this.myReactiveForm.value));
    // TODO: do something useful with form
  }

  ////************************** extra
  // 5a. Default values?
  setDefault() {
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        email: 'info@kassenaar.com',
        password: 'test1234'
      });
    }, 2000);
    // see: .patchValue() and .setValue by Kara: https://github.com/angular/angular/issues/10057
  }
}

