import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRegisterComponent } from './review-register.component';
import { RegisterForm } from '@app/models';

const mockRegister: RegisterForm = {
  title: 'Mr',
  firstName: 'Guilherme',
  lastName: 'Campano',
  username: 'campano.guilherme@gmail.com',
  movie: 'Lion King',
  country: 'Ireland',
  postCode: 'A99 AB12'
};

describe('ReviewRegisterComponent', () => {
  let component: ReviewRegisterComponent;
  let fixture: ComponentFixture<ReviewRegisterComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRegisterComponent);
    component = fixture.componentInstance;
    component.register = mockRegister;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have been created', () => {
    expect(component).toBeDefined();
  });

  it('should show the title followed by the full name', () => {
    const {title, firstName, lastName} = mockRegister;
    const titleAndName = `${title}. ${firstName} ${lastName}`;
    expect(element.textContent).toContain('Name: ' + titleAndName);
  });

  it('should show the username', () => {
    expect(element.textContent).toContain('Username: ' + mockRegister.username);
  });

  it('should show the country selected', () => {
    expect(element.textContent).toContain('Country: ' + mockRegister.country);
  });

  it('should show the post code', () => {
    expect(element.textContent).toContain('Post Code: ' + mockRegister.postCode);
  });
});
