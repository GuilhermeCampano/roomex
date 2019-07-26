import { Action } from '@ngrx/store';


export interface FormState {
  value: string;
}

export const initialFormState: FormState = {
  value: 'intial'
};

export function formReducer(state = initialFormState, action: Action): FormState {
  switch (action.type) {

    default:
      return state;
  }
}
