import { createAction, props } from '@ngrx/store';

import { FormState } from '@state/reducers';

export const sendValidFormAction = createAction(
  '[Form] Send valid form',
  props<FormState>()
);
