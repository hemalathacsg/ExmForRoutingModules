import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancehomeComponent } from './performancehome.component';

describe('PerformancehomeComponent', () => {
  let component: PerformancehomeComponent;
  let fixture: ComponentFixture<PerformancehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformancehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformancehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
