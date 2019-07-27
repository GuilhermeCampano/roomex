import { createAction, props } from '@ngrx/store';

import { FormState } from '@state/reducers';

export enum FormActionTypes {
  SEND_VALID_FORM = '[Form] Send valid form'
}

export const sendValidFormAction = createAction(
  FormActionTypes.SEND_VALID_FORM,
  props<FormState>()
);
