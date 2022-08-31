import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
