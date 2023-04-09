import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-adicao-livro',
  templateUrl: './adicao-livro.component.html',
  styleUrls: ['./adicao-livro.component.scss']
})
export class AdicaoLivroComponent {

  icon_check = '/assets/icons/check.svg';
  icon_lixo = '/assets/icons/lixo.svg';
  icon_fechar = '/assets/icons/fechar_branco.svg';
  icon_add = '/assets/icons/add.svg';
  isAdicaoLivroAberto$ = this.livroService.isAdicaoLivroAberto$.asObservable();

  form = new FormGroup({
    titulo: new FormControl(''),
    descricao: new FormControl('')
  })

  constructor(private livroService: LivroService) { }

  abrirCaixaDeEdicao(): void {
    this.livroService.isAdicaoLivroAberto$.next(true);
  }

  fecharCaixaDeEdicao(): void {
    this.livroService.isAdicaoLivroAberto$.next(false);
    this.form.reset();
  }

  adicionarLivro(): void {
    const controlTitulo = this.form.get('titulo');
    const controlDescricao = this.form.get('descricao');

    if (controlTitulo.value === null) {
      return;
    }
    
    if (controlDescricao.value === null) {
      controlDescricao.setValue('não há descricão');
    }

    this.livroService.adicionarLivro(controlTitulo.value, controlDescricao.value)
    .subscribe();

    this.livroService.getAllLivros$().subscribe(res => {
      this.livroService.livros$.next(res);
    });

    this.livroService.isAdicaoLivroAberto$.next(false);
  }

  validarTitulo(): void {}

}
