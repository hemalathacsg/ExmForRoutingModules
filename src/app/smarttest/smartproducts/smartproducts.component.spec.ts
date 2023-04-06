import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartproductsComponent } from './smartproducts.component';

describe('SmartproductsComponent', () => {
  let component: SmartproductsComponent;
  let fixture: ComponentFixture<SmartproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
