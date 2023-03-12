import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  livros: ILivro[];
  livrosBuscados: ILivro[];
  form: FormGroup;

  constructor(private livroService: LivroService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      livroPesquisado: new FormControl()
    });
  }

  ngOnInit(): void {
    this.livroService.getAllLivros()
      .subscribe((livro: ILivro[]) => {
        this.livros = livro;
        this.livrosBuscados = livro;
    });

    this.form.controls['livroPesquisado'].valueChanges
      .subscribe((caracter) => {
        this.livrosBuscados = this.livros.filter((res) => {
          console.log('caracter', caracter, res.titulo);
          return res.titulo.includes(caracter)
        });
      });
  }
}
