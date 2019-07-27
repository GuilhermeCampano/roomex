import { createSelector } from '@ngrx/store';
import { AppState, FormState } from '../reducers';

export const formFeature = (state: AppState) => state.form;

export const getFormState = createSelector(
  formFeature,
  (formState: FormState) => formState
);
