import { Action } from '@ngrx/store';

export enum FormActionsActionTypes {
  InitForm = '[Form] Initiliaze form',
}

export class InitFormAction implements Action {
  public readonly type = FormActionsActionTypes.InitForm;
}

export type FormActions = InitFormAction;
