import {Directive, Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS, ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[passwordConfirm]',
  // "If the application asks for a validator, provide him the PasswordConfirmDirective"
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordConfirmDirective,
    multi: true
  }]
})
export class PasswordConfirmDirective implements Validator {

  // The input of this directive is the value of the attribute used in the HTML
  // (this is typically the 'password' field, which this one should match.
  @Input() passwordConfirm?: string;

  // The actual implementation of the Validator interface
  validate(control: AbstractControl): ValidationErrors | null {
    // Get the correct control to compare to
    if (this.passwordConfirm && control.parent) {
      const controlToCompare = control.parent.get(this.passwordConfirm)

      // Make the actual comparison and return true/false object
      if (controlToCompare && controlToCompare.value === control.value) {
        console.log('passwords are equal'); // just logging
        return null; // returning 'null' from a validator informs that there is no error
      }
    }
    console.log('passwords are NOT equal'); // just logging
    return {'notEqual': true} // In the template we check on <control>.errors.notEqual to show error msg.
  }
}
