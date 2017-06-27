import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbasadorsComponent } from './ambasadors.component';

describe('AmbasadorsComponent', () => {
  let component: AmbasadorsComponent;
  let fixture: ComponentFixture<AmbasadorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbasadorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbasadorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
