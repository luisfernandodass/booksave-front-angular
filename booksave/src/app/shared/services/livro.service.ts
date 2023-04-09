import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  adicionarLivro(titulo: string, descricao?: string): Observable<ILivro> {
    return this.http.post('http://localhost:3000/livros/', { titulo, descricao }) as Observable<ILivro>;
  }

  getLivroById(): void {}

  getAllLivros$(): Observable<ILivro[]> {
    return this.http.get('http://localhost:3000/livros/')
    .pipe(
      map((res: any[]) => {
        this.livros$.next(res);
        return res;
      })
    ) as Observable<ILivro[]>
  }

  atualizarInfoLivro(titulo: string, descricao: string): Observable<ILivro> {
    return this.http.put(`http://localhost:3000/livros/${titulo}`, { titulo, descricao }) as Observable<ILivro>;
  }

  deletarLivro(titulo: string): Observable<ILivro> {
    return this.http.delete(`http://localhost:3000/livros/${titulo}`) as Observable<ILivro>;
  }

  readonly livros$ = new BehaviorSubject<ILivro[]>([]);
  
  readonly livroAbertoState$ = new BehaviorSubject<ILivro>({
    id: 0,
    titulo: '',
    descricao: '',
    favorito: false,
    tags: []
  });

  readonly isEdicaoLivroAberto$ = new BehaviorSubject<boolean>(false);
  readonly isAdicaoLivroAberto$ = new BehaviorSubject<boolean>(false);
}
