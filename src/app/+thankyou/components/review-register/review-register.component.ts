import { Component, Input } from '@angular/core';
import { RegisterForm } from '@app/models';

@Component({
  selector: 'app-review-register',
  templateUrl: './review-register.component.html',
  styleUrls: ['./review-register.component.scss']
})
export class ReviewRegisterComponent {
  @Input() public register: RegisterForm;
}
