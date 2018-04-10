import { ValidationErrors } from '@angular/forms';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/RX';
export class PasswordValidator {
    static validOldPassword(c: AbstractControl): Observable<ValidationErrors | null> {
        let debounceTime = 5000; //milliseconds
        return Observable.timer(debounceTime).map(() => {
            if (c.value != 1234)
                return { 'invalidOldPassword': true };
        });
    }
    static passwordmatchvalidator(c: AbstractControl): ValidationErrors | null {
        let newPassword = c.get('newPassword');
        let confirmPassword = c.get('confirmPassword');
        if(newPassword.value !== confirmPassword.value)
            return ({ 'passwordShouldMatch': true });
        return null;

    }
}
