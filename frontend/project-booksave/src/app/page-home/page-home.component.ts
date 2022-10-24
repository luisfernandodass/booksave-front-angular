import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../models/book.interface';
import { BookControllerService } from '../shared/services/book-controller.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  books: Book[] = [];
  book: Book;
  qntdBooks: number = 0;

  bookForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  })

  constructor(private bookControllerService: BookControllerService) { }

  ngOnInit(): void {
  }

  public addBook(): void {
    const bookTitle = this.bookForm.get('title')?.value;
    const bookDescription = this.bookForm.get('description')?.value;
    this.bookControllerService.addBook(bookTitle, bookDescription).subscribe((book: Book) => {
      this.books.push(book);
      this.book = book;
      this.qntdBooks++;
    });
    console.log('#addBook this.books', this.books)
  }

  deleteBook(book: Book) {
    const indexof = this.books.map((b) => b === book).indexOf(true);
    this.books.splice(indexof)
    console.log('#deleteBook this.books', this.books);
    this.qntdBooks--;
  }

}
