import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-edicao-livro',
  templateUrl: './edicao-livro.component.html',
  styleUrls: ['./edicao-livro.component.scss']
})
export class EdicaoLivroComponent implements OnInit {

  isCaixaEdicaoAberta = false;
  isTituloVazio = true;
  icon_check = '/assets/icons/check.svg';
  icon_lixo = '/assets/icons/lixo.svg';
  icon_fechar = '/assets/icons/fechar.svg';

  form = new FormGroup({
    titulo: new FormControl(''),
    descricao: new FormControl('')
  })

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    console.log(this)
  }

  adicionarLivro(): void {
    if (this.form.get('descricao')?.value == '') this.form.get('descricao')?.setValue('não há descricão');

    this.livroService.adicionarLivro(this.form.get('titulo')?.value, this.form.get('descricao')?.value)
      .subscribe((livro: ILivro) => {
        console.log('livro adicionado', livro);
        window.location.reload();
      });
  }

  validarTitulo(): void {}

  toggleCaixaDeEdicao(): void {
    this.isCaixaEdicaoAberta = !this.isCaixaEdicaoAberta;
    this.form.reset();
  }

}
