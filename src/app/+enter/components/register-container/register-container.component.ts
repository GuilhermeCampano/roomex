import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Movie, RegisterForm } from '@app/models';
import { fetchMoviesAction, sendValidFormAction } from '@state/actions';
import { AppState } from '@state/reducers';
import { getMovies } from '@state/selectors';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.movies$ = this.store.select(getMovies);
  }

  public onFormSubmit(formValues: RegisterForm): void {
    this.store.dispatch(sendValidFormAction(formValues));
  }

  public onMovieChange(movieQuery: string): void {
    this.store.dispatch(fetchMoviesAction({ movieQuery }));
  }
}
