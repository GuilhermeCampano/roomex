import { Action, createReducer, on } from '@ngrx/store';

import { sendValidFormAction } from '@state/actions';
import { RegisterForm } from '@app/models';

export type FormState = RegisterForm;

export const initialFormState: FormState = {
  title: undefined,
  firstName: undefined,
  lastName: undefined,
  username: undefined,
  movie: undefined,
  country: undefined,
  postCode: undefined
};

const reducer = createReducer(
  initialFormState,
  on(sendValidFormAction, (state, formData) => ({
    ...state,
    ...formData
  }))
);

export function formReducer(state: FormState | undefined, action: Action) {
  return reducer(state, action);
}
