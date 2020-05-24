import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinesPreviousComponent } from './vaccines-previous.component';

describe('VaccinesPreviousComponent', () => {
  let component: VaccinesPreviousComponent;
  let fixture: ComponentFixture<VaccinesPreviousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinesPreviousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinesPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
