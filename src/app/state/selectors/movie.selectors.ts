import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const movieFeature = (state: AppState) => state.movies;

export const getMovieState = createSelector(
  movieFeature,
  (movieState) => movieState
);

export const getMovies = createSelector(
  getMovieState,
  ({list}) => list
);

export const isMoviesLoading = createSelector(
  getMovieState,
  ({isLoading}) => isLoading
);

export const hasMovies = createSelector(
  getMovieState,
  ({isLoading, list}) => !isLoading && !!list && list.length > 0
);
