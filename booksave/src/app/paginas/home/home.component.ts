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

  livros$ = this.livroService.livros$;
  livrosBuscados: ILivro[];
  form: FormGroup;

  constructor(private livroService: LivroService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      livroPesquisado: new FormControl()
    });
  }

  ngOnInit(): void {
    this.livroService.getAllLivros()
      .subscribe((livros: ILivro[]) => {
        this.livros$.next(livros);
        this.livrosBuscados = livros;
    });
  }

  buscarLivro(): void {
    this.form.controls['livroPesquisado'].valueChanges
    .subscribe((caracter) => {
      this.livros$.subscribe((res) => {
        res.filter((res) => {
          this.livros$.next(res.titulo.toUpperCase().includes(caracter.toUpperCase()));
          return res.titulo.toUpperCase().includes(caracter.toUpperCase());
        });
      });
    });
  }
}
