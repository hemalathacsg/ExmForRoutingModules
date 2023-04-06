import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceproductsComponent } from './performanceproducts.component';

describe('PerformanceproductsComponent', () => {
  let component: PerformanceproductsComponent;
  let fixture: ComponentFixture<PerformanceproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
