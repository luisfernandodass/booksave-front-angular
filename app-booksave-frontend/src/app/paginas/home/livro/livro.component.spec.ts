import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroComponent } from './livro.component';

describe('LivroComponent', () => {
  let component: LivroComponent;
  let fixture: ComponentFixture<LivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
