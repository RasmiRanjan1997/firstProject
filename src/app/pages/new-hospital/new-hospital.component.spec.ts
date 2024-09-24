import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHospitalComponent } from './new-hospital.component';

describe('NewHospitalComponent', () => {
  let component: NewHospitalComponent;
  let fixture: ComponentFixture<NewHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewHospitalComponent]
    });
    fixture = TestBed.createComponent(NewHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
