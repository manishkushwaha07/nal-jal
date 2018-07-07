import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbBarChartComponent } from './dcb-bar-chart.component';

describe('DcbBarChartComponent', () => {
  let component: DcbBarChartComponent;
  let fixture: ComponentFixture<DcbBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcbBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
