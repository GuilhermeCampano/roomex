import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { RegisterForm } from '@app/models';
import { takeLast, take, throttle, throttleTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit, OnDestroy {
  @Output() public formSubmit = new EventEmitter<RegisterForm>();
  @Output() public movieChange = new EventEmitter<string>();

  public registerForm: FormGroup;
  public readonly titleOptions = ['Mr', 'Mrs', 'Ms', 'Dr'];
  public readonly countryOptions = ['Ireland', 'United Kingdom'];

  private unsubscribe$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

  public handleSubmit(): void {
    if (this.registerForm.valid) {
      this.formSubmit.emit(this.registerForm.value);
    }
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: [this.titleOptions[0]],
      firstName: ['', Validators.required],
      lastName: [''],
      username: [''],
      movie: [''],
      country: [''],
      postCode: [''],
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
}
