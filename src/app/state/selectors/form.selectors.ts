import { createSelector } from '@ngrx/store';
import { State, FormState } from '../reducers';

export const selectFeature = (state: State) => state.formState;

export const getFormState = createSelector(
  selectFeature,
  (state: FormState) => state
);
