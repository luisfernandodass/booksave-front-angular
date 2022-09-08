import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  books: string[] = [];

  form = new FormGroup({
    book: new FormControl('')
  })

  book = new FormControl('');

  public addBook(): void {
    this.books.push(this.form.get('book')?.value);
    console.log(this.books)
  }

}
