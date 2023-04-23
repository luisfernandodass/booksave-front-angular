import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToggleComponent } from './demo-toggle.component';

describe('DemoToggleComponent', () => {
  let component: DemoToggleComponent;
  let fixture: ComponentFixture<DemoToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
