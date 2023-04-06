import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplandingpageComponent } from './applandingpage.component';

describe('ApplandingpageComponent', () => {
  let component: ApplandingpageComponent;
  let fixture: ComponentFixture<ApplandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplandingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
