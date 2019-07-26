import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '@root/environments/environment';
import { FormState, formReducer } from './form-state.reducer';

export interface State {
  formState: FormState;
}

export const reducers: ActionReducerMap<State> = {
  formState: formReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export * from './form-state.reducer';

