import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookControllerService {

  constructor(private http: HttpClient) { }

  addBook(title: string, description?: string) {
    return this.http.post('http://localhost:3000/books/', { title, description });
  }

  getBooks() {
    return this.http.get('http://localhost:3000/books/')
      .pipe(
        map(response => response)
      );
  }

  deleteBookByTitle(title: string) {
    return this.http.delete(`http://localhost:3000/books/${title}`);
  }
}
