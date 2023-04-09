import { Component, Input, OnInit } from '@angular/core';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  @Input() livro: ILivro;
  isContainerEdicaoLivroOpen$ = this.livroService.isContainerEdicaoLivroOpen$;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
  }

  abrirLivro(): void {
    this.isContainerEdicaoLivroOpen$.next(true);
    this.livroService.livroAbertoState$.next(this.livro);
  }

}
