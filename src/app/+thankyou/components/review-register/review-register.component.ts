import { Component, OnInit, Input } from '@angular/core';
import { FormState } from '@state/reducers';

@Component({
  selector: 'app-review-register',
  templateUrl: './review-register.component.html',
  styleUrls: ['./review-register.component.css']
})
export class ReviewRegisterComponent {
  @Input() public register: FormState;
}
