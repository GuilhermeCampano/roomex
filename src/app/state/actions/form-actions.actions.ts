import { Action } from '@ngrx/store';

import { FormState } from '@state/reducers';

export enum FormActionsActionTypes {
  SEND_VALID_FORM = '[Form] Send valid form',
}

export class SendValidFormAction implements Action {
  public readonly type = FormActionsActionTypes.SEND_VALID_FORM;

  constructor(public payload: FormState) {}
}

export type FormActions = SendValidFormAction;
