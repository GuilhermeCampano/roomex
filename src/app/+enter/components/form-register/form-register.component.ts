import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

import { RegisterForm, Movie } from '@app/models';
import { validateNotNull, validateUserName, validateUKPostCode, validateIrelandPostCode } from '@app/utils';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit, OnDestroy {
  @Input() public movies: Movie[] = [];

  @Output() public formSubmit = new EventEmitter<RegisterForm>();
  @Output() public movieChange = new EventEmitter<string>();

  public registerForm: FormGroup;
  public movieFocus = false;
  public movieSelectionFocus = false;

  // @TODO add a constants for these options
  public readonly titleOptions = ['Mr', 'Mrs', 'Ms', 'Dr'];
  public readonly countryOptions = ['Ireland', 'United Kingdom'];

  private unsubscribe$ = new Subject<void>();
  // @TODO move this to a constant
  private readonly charsRegex = /^[a-zA-Z]+$/;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: [this.titleOptions[0]],
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.charsRegex)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.charsRegex)
      ])],
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
        postCodeControl.updateValueAndValidity();
      });

    this.registerForm.get('movie').valueChanges
      .pipe(takeUntil(this.unsubscribe$), distinctUntilChanged())
      .subscribe((movieValue) => {
        this.movieChange.emit(movieValue);
      });
  }

  public handleSubmit(): void {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.formSubmit.emit(this.registerForm.value);
  }

  public onMovieClick(movieEvent: string): void {
    this.registerForm.get('movie').setValue(movieEvent);
    this.movieFocus = false;
    this.movieSelectionFocus = false;
  }

  public hasControlError(field: string): boolean {
    const control = this.registerForm.get(field);
    return control.invalid && (control.dirty || control.touched);
  }

  public get isLastNameDisabled(): boolean {
    const {firstName} = this.registerForm.value;
    return !firstName;
  }

  public get firstNameErrorLabel(): string {
    const control = this.registerForm.get('firstName');
    if (control.errors.required) {
      return 'First Name is required';
    } else if (control.errors.pattern) {
      return 'First Name can only contain characters';
    }
  }

  public get lastNameErrorLabel(): string {
    const control = this.registerForm.get('lastName');
    if (control.errors.required) {
      return 'Last Name is required';
    } else if (control.errors.pattern) {
      return 'Last Name can only contain characters';
    }
  }

  public get userNameErrorLabel(): string {
    const control = this.registerForm.get('username');
    if (control.errors.email) {
      return 'A valid email must be provided';
    } else if (control.errors.minLength) {
      return 'Username must have at least 5 characters';
    }
  }

  public get postCodeErrorLabel(): string {
    const control = this.registerForm.get('postCode');
    if (control.errors.iePostCode) {
      return 'Invalid Ireland Post Code';
    } else if (control.errors.ukPostCode) {
      return 'Invalid United Kingdom Post Code';
    }
  }

  public get showMovieSelection(): boolean {
    const hasMovies = !!this.movies && !!this.movies.length;
    if (hasMovies && (this.movieFocus || this.movieSelectionFocus)) {
      return true;
    }
    return false;
  }
}
