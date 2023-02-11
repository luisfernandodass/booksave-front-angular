import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowBookComponent } from './row-book.component';

describe('RowBookComponent', () => {
  let component: RowBookComponent;
  let fixture: ComponentFixture<RowBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
