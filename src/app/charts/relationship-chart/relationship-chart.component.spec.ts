import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipChartComponent } from './relationship-chart.component';

describe('RelationshipChartComponent', () => {
  let component: RelationshipChartComponent;
  let fixture: ComponentFixture<RelationshipChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
