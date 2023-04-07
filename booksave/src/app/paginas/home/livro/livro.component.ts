import { Component, Input, OnInit } from '@angular/core';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  @Input() livro: ILivro;
  public panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
