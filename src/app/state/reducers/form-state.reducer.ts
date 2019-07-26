import { Action } from '@ngrx/store';

import { FormActionsActionTypes } from '@state/actions';

export interface FormState {
  value: string;
}

export const initialFormState: FormState = {
  value: ''
};

export function formReducer(state = initialFormState, action: Action): FormState {
  switch (action.type) {
    case FormActionsActionTypes.InitForm:
      return {
        ...state,
        value: 'init'
      };
    default:
      return state;
  }
}
