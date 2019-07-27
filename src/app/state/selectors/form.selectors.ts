import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers';

export const formFeature = (state: AppState) => state.form;

export const getFormState = createSelector(
  formFeature,
  (formState) => formState
);
