import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincollectionComponent } from './logincollection.component';

describe('LogincollectionComponent', () => {
  let component: LogincollectionComponent;
  let fixture: ComponentFixture<LogincollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
