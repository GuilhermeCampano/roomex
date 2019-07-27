import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, FormState } from '@state/reducers';
import { Observable } from 'rxjs';
import { getFormState } from '@state/selectors';

@Component({
  selector: 'app-thank-you-container',
  templateUrl: './thank-you-container.component.html',
  styleUrls: ['./thank-you-container.component.scss']
})
export class ThankYouContainerComponent implements OnInit {
  public formState$: Observable<FormState>;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.formState$ = this.store.select(getFormState);
  }
}
