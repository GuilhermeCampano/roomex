import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

import { Movie, RegisterForm } from '@app/models';
import { AppState } from '@state/reducers';
import { sendValidFormAction, fetchMoviesAction } from '@state/actions';
import { getMovies, isMoviesLoading, hasMovies } from '@state/selectors';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  public hasMovies$: Observable<boolean>;
  public movies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.movies$ = this.store.select(getMovies);
    this.hasMovies$ = this.store.select(hasMovies);
  }

  public onFormSubmit(formValues: RegisterForm): void {
    this.store.dispatch(sendValidFormAction(formValues));
  }

  public onMovieChange(movieQuery: string): void {
    this.store.dispatch(fetchMoviesAction({movieQuery}));
  }
}
