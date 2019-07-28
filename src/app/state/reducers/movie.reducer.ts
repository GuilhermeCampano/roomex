import { Action, createReducer, on } from '@ngrx/store';

import { Movie } from '@app/models';
import { fetchMoviesAction, fetchMoviesFailedAction, fetchMoviesSuccessAction } from '../actions';

export interface MovieState {
  list: Movie[];
  isLoading: boolean;
}

export const initialMovieState: MovieState = {
  list: [],
  isLoading: false
};

const reducer = createReducer(
  initialMovieState,
  on(fetchMoviesAction, state => ({
    ...state,
    list: [],
    isLoading: true
  })),
  on(fetchMoviesSuccessAction, (state, payaload) => ({
    ...state,
    list: payaload.movies,
    isLoading: false
  })),
  on(fetchMoviesFailedAction, state => ({
    ...state,
    isLoading: false
  }))
);

export function movieReducer(state: MovieState | undefined, action: Action) {
  return reducer(state, action);
}
