import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ILivro } from 'src/app/shared/interfaces/livro.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  readonly livroParaEditar$ = new BehaviorSubject<ILivro>({
    'id': 0,
    'titulo':  'Livro 0 ',
    'descricao': 'lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsulorem ipsu',
    'favorito': false,
    'tags': [ 'Ficção ', 'Aventura ', 'Biografia' ]
  });
  constructor(private http: HttpClient) { }

  adicionarLivro(titulo: string, descricao?: string): Observable<ILivro> {
    return this.http.post('http://localhost:3000/livros/', { titulo, descricao }) as Observable<ILivro>;
  }

  getLivroById(): void {}

  getAllLivros(): Observable<ILivro[]> {
    return this.http.get('http://localhost:3000/livros/') as Observable<ILivro[]>
  }

  atualizarInfoLivro(titulo: string, descricao: string): Observable<ILivro> {
    return this.http.put(`http://localhost:3000/livros/${titulo}`, { titulo, descricao }) as Observable<ILivro>;
  }

  deletarLivro(titulo: string): Observable<ILivro> {
    return this.http.delete(`http://localhost:3000/livros/${titulo}`) as Observable<ILivro>;
  }
}
