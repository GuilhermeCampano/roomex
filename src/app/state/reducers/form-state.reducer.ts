import { Action } from '@ngrx/store';

import { FormActionsActionTypes, FormActions } from '@state/actions';

// @TODO: add a model similar?
export interface FormState {
  title: string;
  firstName: string;
  lastName: string;
  username: string;
  movie: string;
  country: string;
  postCode: string;
}

export const initialFormState: FormState = {
  title: undefined,
  firstName: undefined,
  lastName: undefined,
  username: undefined,
  movie: undefined,
  country: undefined,
  postCode: undefined,
};

export function formReducer(state = initialFormState, action: FormActions): FormState {
  switch (action.type) {
    case FormActionsActionTypes.SEND_VALID_FORM:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
