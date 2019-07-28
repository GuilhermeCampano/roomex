import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@root/environments/environment';
import { FormState, formReducer } from './form.reducer';
import { MovieState, movieReducer } from './movie.reducer';

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
