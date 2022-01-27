import { FormControl, FormGroup, Validators } from "@angular/forms";

type IssFormGroupControls = {
    altitude: FormControl;
    velocity: FormControl;
    dateTime: FormControl;
}
export enum ISS_FORM_TITLES {
    velocity = 'velocity',
    altitude = 'altitude',
    time = 'time',
}

export enum ALTITUDE_OPTIONS {
    miles = 'miles',
    kilometers = 'kilometers'
};

export enum VELOCITY_OPTIONS {
    mph = 'mph',
    kmh = 'km/h'
};

enum DATE_FORMATS {
    dateDefault = 'DD.MM.yyyy',
    dateOption2 = 'D.M.YY',
    dateOption3 = 'D.M.yyyy'
}
interface ISelectOption {
    value: string;
    viewValue: string;
}

export class IssFormGroup extends FormGroup {
    ALTITUDE_OPTIONS = ALTITUDE_OPTIONS;
    VELOCITY_OPTIONS = VELOCITY_OPTIONS;
    ISS_FORM_TITLES = ISS_FORM_TITLES;
    DATE_FORMATS = DATE_FORMATS;

    altitudeTypeOptions: ISelectOption[] = [
        {value: ALTITUDE_OPTIONS.miles, viewValue: ALTITUDE_OPTIONS.miles.toUpperCase() },
        {value: ALTITUDE_OPTIONS.kilometers, viewValue: ALTITUDE_OPTIONS.kilometers.toUpperCase() },
    ];

    velocityTypeOptions: ISelectOption[] = [
        { value: VELOCITY_OPTIONS.mph, viewValue: VELOCITY_OPTIONS.mph.toUpperCase() },
        { value: VELOCITY_OPTIONS.kmh, viewValue: VELOCITY_OPTIONS.kmh.toUpperCase() },
    ];

    constructor() {
        super({
            altitude: new FormControl('', [Validators.required]),
            velocity: new FormControl('', [Validators.required]),
            dateTime: new FormControl('', [Validators.required]),
        } as IssFormGroupControls);
    }  
}