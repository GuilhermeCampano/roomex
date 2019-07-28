import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@root/environments/environment';
import { formReducer, FormState } from './form.reducer';
import { movieReducer, MovieState } from './movie.reducer';

export interface AppState {
  form: FormState;
  movies: MovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  form: formReducer,
  movies: movieReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export * from './form.reducer';
export * from './movie.reducer';
