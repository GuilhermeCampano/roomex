import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

import { Movie } from '@app/models';
import { AppState } from '@state/reducers';
import { sendValidFormAction, fetchMoviesAction } from '@state/actions';
import { getMovies, isMoviesLoading, hasMovies } from '@state/selectors';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  // @TODO: move the form to a presentational component
  public registerForm: FormGroup;
  public formSubscription: Subscription;
  public movies$: Observable<Movie[]>;
  public hasMovies$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.movies$ = this.store.select(getMovies);
    this.hasMovies$ = this.store.select(hasMovies);
    this.registerForm = this.formBuilder.group({
      title: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      username: [''],
      movie: [''],
      country: [''],
      postCode: [''],
    });
    // @TODO: unsubscribe when component is destroyed
    this.formSubscription = this.registerForm.get('movie').valueChanges.subscribe(movieValue => {
      this.store.dispatch(fetchMoviesAction({movieQuery: movieValue}));
    });
  }

  public onSubmit() {
    // @TODO: create an effect to redirect to /thankyou
    this.store.dispatch(sendValidFormAction(this.registerForm.value));
  }
}
