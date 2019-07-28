import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const movieFeature = (state: AppState) => state.movies;

export const getMovieState = createSelector(
  movieFeature,
  movieState => movieState
);

export const getMovies = createSelector(
  getMovieState,
  ({ list }) => list && list.filter((_, index) => index < 5)
);

export const isMoviesLoading = createSelector(
  getMovieState,
  ({ isLoading }) => isLoading
);
