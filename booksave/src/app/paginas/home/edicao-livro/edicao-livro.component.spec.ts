import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoLivroComponent } from './edicao-livro.component';

describe('EdicaoLivroComponent', () => {
  let component: EdicaoLivroComponent;
  let fixture: ComponentFixture<EdicaoLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
