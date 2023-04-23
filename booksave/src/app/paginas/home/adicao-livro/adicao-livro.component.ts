import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';
import { LivroService } from 'src/app/shared/services/livro.service';
import { StateManagementService } from 'src/app/shared/services/state-management.service';

@Component({
  selector: 'app-adicao-livro',
  templateUrl: './adicao-livro.component.html',
  styleUrls: ['./adicao-livro.component.scss']
})
export class AdicaoLivroComponent {

  icons = {
    check: '/assets/icons/check.svg',
    fechar: '/assets/icons/fechar_branco.svg',
  };
  isAdicaoLivroAberto$ = this.livroService.isCaixaAdicaoLivroAberto$.asObservable();
  livrosDemo: ILivro[] = [];

  form = new FormGroup({
    titulo: new FormControl(''),
    descricao: new FormControl('')
  })

  constructor(private livroService: LivroService, private stateManagementService: StateManagementService) { }

  abrirCaixaDeEdicao(): void {
    this.livroService.isCaixaAdicaoLivroAberto$.next(true);
  }

  fecharCaixaDeEdicao(): void {
    this.livroService.isCaixaAdicaoLivroAberto$.next(false);
    this.form.reset();
  }

  adicionarLivro(): void {
    const controlTitulo = this.form.get('titulo');
    const controlDescricao = this.form.get('descricao');

    if (controlTitulo.value === null) {
      return;
    }
    
    if (controlDescricao.value === null || controlDescricao.value === '') {
      controlDescricao.setValue('não há descricão');
    }

    const livro = {
      titulo: controlTitulo.value,
      descricao: controlDescricao.value,
      favorito: false,
      tags: []
    };

    if (this.stateManagementService.isDemo$.getValue() === false) {
      this.livroService.adicionarLivro(livro).subscribe();
  
      this.livroService.getAllLivros$().subscribe(res => {
        this.livroService.livros$.next(res);
      });
    } else {
      this.livrosDemo.push(livro);
      this.stateManagementService.livros$.next(this.livrosDemo);
    }

    this.livroService.isCaixaAdicaoLivroAberto$.next(false);
  }

  validarTitulo(): void {}

}
