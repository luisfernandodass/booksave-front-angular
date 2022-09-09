import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: string[] = [];

  form = new FormGroup({
    book: new FormControl('')
  })

  book = new FormControl('');

  ngOnInit() {
    this.getBookInLocalStorage();
  }

  public addBook(): void {
    const book = this.form.get('book')?.value;
    this.books.push(book);
    localStorage.setItem(`${book}`, book);
  }

  private getBookInLocalStorage(): void {
    if (localStorage.length === 0) { return; }

    for (let i = 0; i < localStorage.length; i++){
      this.books.push(localStorage.key(i) as string);
    }
  }

}
