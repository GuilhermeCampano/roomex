import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '@state/reducers';
import { InitFormAction } from '@state/actions';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {

  constructor(private store: Store<State>) { }

  public ngOnInit(): void {
    this.store.dispatch(new InitFormAction());
  }
}
