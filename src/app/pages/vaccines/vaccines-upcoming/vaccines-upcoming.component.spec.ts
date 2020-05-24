import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinesUpcomingComponent } from './vaccines-upcoming.component';

describe('VaccinesUpcomingComponent', () => {
  let component: VaccinesUpcomingComponent;
  let fixture: ComponentFixture<VaccinesUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinesUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinesUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
