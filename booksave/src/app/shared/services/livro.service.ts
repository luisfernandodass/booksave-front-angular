import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  adicionarLivro(livro: ILivro): Observable<ILivro> {
    const titulo = livro.titulo;
    const descricao = livro.descricao;
    return this.http.post('http://localhost:3000/livros/', { 
      titulo, 
      descricao 
    }) as Observable<ILivro>;
  }

  getLivroById(): void {}

  getAllLivros$(): Observable<ILivro[]> {
    return this.http.get(environment.endpoint + 'livros')
    .pipe(
      map((res: any[]) => {
        this.livros$.next(res);
        return res;
      })
    ) as Observable<ILivro[]>
  }

  atualizarInfoLivro(livro: ILivro): Observable<ILivro> {
    const titulo = livro.titulo;
    const descricao = livro.descricao;

    return this.http.put(`http://localhost:3000/livros/${titulo}`, { 
      titulo, 
      descricao 
    }) as Observable<ILivro>;
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

  readonly isCaixaEdicaoLivroAberto$ = new BehaviorSubject<boolean>(false);
  readonly isCaixaAdicaoLivroAberto$ = new BehaviorSubject<boolean>(false);
}
