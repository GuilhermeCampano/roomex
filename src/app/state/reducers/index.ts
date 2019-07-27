import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@root/environments/environment';
import { FormState, formReducer } from './form.reducer';

export interface AppState {
  formState: FormState;
}

export const reducers: ActionReducerMap<AppState> = {
  formState: formReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export * from './form.reducer';

