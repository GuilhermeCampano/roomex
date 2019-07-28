import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Movie } from '@app/models';

export enum MoviesActionTypes {
  FETCH_MOVIES = '[Movies] Fetch movies',
  FETCH_MOVIES_SUCCESS = '[Movies] Fetch movies success',
  FETCH_MOVIES_FAILED = '[Movies] Fetch movies failed'
}

export const fetchMoviesAction = createAction(
  MoviesActionTypes.FETCH_MOVIES,
  props<{ movieQuery: string }>()
);

export const fetchMoviesSuccessAction = createAction(
  MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  props<{ movies: Movie[] }>()
);

export const fetchMoviesFailedAction = createAction(
  MoviesActionTypes.FETCH_MOVIES_FAILED,
  props<{ error: HttpErrorResponse }>()
);
