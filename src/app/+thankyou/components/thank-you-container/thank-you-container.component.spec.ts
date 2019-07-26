import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouContainerComponent } from './thank-you-container.component';

describe('ThankYouContainerComponent', () => {
  let component: ThankYouContainerComponent;
  let fixture: ComponentFixture<ThankYouContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
