import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiproductsComponent } from './apiproducts.component';

describe('ApiproductsComponent', () => {
  let component: ApiproductsComponent;
  let fixture: ComponentFixture<ApiproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
