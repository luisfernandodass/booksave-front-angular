import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILivro } from '../interfaces/livro.interface';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  constructor() { }

  readonly isDemo$ = new BehaviorSubject<boolean>(true);
  readonly livros$ = new BehaviorSubject<ILivro[]>([]);
}

// id: 0,
// titulo: '',
// descricao: '',
// favorito: false,
// tags: [],
