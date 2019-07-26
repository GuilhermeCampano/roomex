import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State, FormState } from '@state/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thank-you-container',
  templateUrl: './thank-you-container.component.html',
  styleUrls: ['./thank-you-container.component.scss']
})
export class ThankYouContainerComponent implements OnInit {

  public formState$: Observable<FormState>;
  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.formState$ = this.store.select('formState');
  }

}
