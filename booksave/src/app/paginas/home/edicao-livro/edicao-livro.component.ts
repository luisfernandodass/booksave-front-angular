import { Component } from '@angular/core';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-edicao-livro',
  templateUrl: './edicao-livro.component.html',
  styleUrls: ['./edicao-livro.component.scss']
})
export class EdicaoLivroComponent {
  icon_fechar = '/assets/icons/fechar_preto.svg';
  livro$ = this.livroService.livroAbertoState$.asObservable();

  constructor(private livroService: LivroService) { }

  deletarLivro(): void {
    this.fechar();
    this.livroService.deletarLivro(this.livroService.livroAbertoState$.getValue().titulo);
    console.log('deletar livro', this.livroService.livroAbertoState$.getValue().titulo);
  }

  fechar(): void {
    this.livroService.isContainerEdicaoLivroOpen$.next(false);
  }
}
