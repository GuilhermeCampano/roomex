import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FormActionTypes } from '../actions';

@Injectable()
export class FormEffects {
  public sendRegisterForm$: Observable<never> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FormActionTypes.SEND_VALID_FORM),
        tap(() => this.router.navigate(['/thankyou']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
