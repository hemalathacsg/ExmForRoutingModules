import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarthomeComponent } from './smarthome.component';

describe('SmarthomeComponent', () => {
  let component: SmarthomeComponent;
  let fixture: ComponentFixture<SmarthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmarthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmarthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
