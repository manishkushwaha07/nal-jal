import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPieChartComponent } from './read-pie-chart.component';

describe('ReadPieChartComponent', () => {
  let component: ReadPieChartComponent;
  let fixture: ComponentFixture<ReadPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
