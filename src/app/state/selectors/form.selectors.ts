import { createSelector } from '@ngrx/store';
import { AppState, FormState } from '../reducers';

export const selectFeature = (state: AppState) => state.formState;

export const getFormState = createSelector(
  selectFeature,
  (formState: FormState) => formState
);
