import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNestedFormComponent } from './dashboard-nested-form.component';

describe('DashboardNestedFormComponent', () => {
  let component: DashboardNestedFormComponent;
  let fixture: ComponentFixture<DashboardNestedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNestedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
