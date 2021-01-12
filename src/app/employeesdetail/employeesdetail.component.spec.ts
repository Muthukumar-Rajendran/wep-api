import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesdetailComponent } from './employeesdetail.component';

describe('EmployeesdetailComponent', () => {
  let component: EmployeesdetailComponent;
  let fixture: ComponentFixture<EmployeesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
