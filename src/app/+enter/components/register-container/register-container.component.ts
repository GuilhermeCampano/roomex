import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppState } from '@state/reducers';
import { sendValidFormAction } from '@root/app/state/actions';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  // @TODO: move the form to a presentational component
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      username: [''],
      movie: [''],
      country: [''],
      postCode: [''],
    });
  }

  public onSubmit() {
    // @TODO: create an effect to redirect to /thankyou
    this.store.dispatch(sendValidFormAction(this.registerForm.value));
  }
}
