import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyEditDialogComponent } from './allergy-edit-dialog.component';

describe('AllergyEditDialogComponent', () => {
  let component: AllergyEditDialogComponent;
  let fixture: ComponentFixture<AllergyEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
