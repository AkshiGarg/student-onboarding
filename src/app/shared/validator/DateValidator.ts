import { ValidatorFn, AbstractControl } from '@angular/forms';

export class DateValidator {
    static validDate(min: Date, max: Date): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if (control.value && (control.value < min || control.value > max)) {
                return { 'dateRange': true };
            }
            return null;
        };
    }
}