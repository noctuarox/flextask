import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbasadorCardComponent } from './ambasador-card.component';

describe('AmbasadorCardComponent', () => {
  let component: AmbasadorCardComponent;
  let fixture: ComponentFixture<AmbasadorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbasadorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbasadorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
