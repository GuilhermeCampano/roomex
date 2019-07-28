import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RegisterForm } from '@app/models';
import { validateNotNull, validateUserName, validateUKPostCode, validateIrelandPostCode } from '@app/utils';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit, OnDestroy {
  @Output() public formSubmit = new EventEmitter<RegisterForm>();
  @Output() public movieChange = new EventEmitter<string>();

  public registerForm: FormGroup;
  // @TODO add a constants for these options
  public readonly titleOptions = ['Mr', 'Mrs', 'Ms', 'Dr'];
  public readonly countryOptions = ['Ireland', 'United Kingdom'];

  private unsubscribe$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

  public handleSubmit(): void {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.formSubmit.emit(this.registerForm.value);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: [this.titleOptions[0]],
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/)
      ])],
      lastName: ['', Validators.required],
      username: ['', validateUserName],
      movie: [''],
      country: ['', validateNotNull],
      postCode: [''],
    });

    this.registerForm.get('firstName').valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((firstName) => {
        const lastNameControl = this.registerForm.get('lastName');
        !!firstName ? lastNameControl.enable() : lastNameControl.disable();
      });

    this.registerForm.get('country').valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((country) => {
        const postCodeControl = this.registerForm.get('postCode');
        if (country === 'Ireland') {
          postCodeControl.setValidators(validateIrelandPostCode);
        }
        if (country === 'United Kingdom') {
          postCodeControl.setValidators(validateUKPostCode);
        }
      });

    this.registerForm.get('movie').valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((movieValue) => {
        this.movieChange.emit(movieValue);
      });

  }

  public hasControlError(field: string): boolean {
    const control = this.registerForm.get(field);
    return control.invalid && (control.dirty || control.touched);
  }

  public get isLastNameDisabled(): boolean {
    const {firstName} = this.registerForm.value;
    return !firstName;
  }
}
