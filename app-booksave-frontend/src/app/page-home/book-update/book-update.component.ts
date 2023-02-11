import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from 'src/app/models/book.interface';
import { BookControllerService } from 'src/app/shared/services/book-controller.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  isFooterOpen = false;
  titleIsEmpty = true;

  bookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private bookControllerService: BookControllerService) { }

  ngOnInit(): void {
    console.log(this)
  }

  addBook(): void {
    const title = this.bookForm.get('title');
    const description = this.bookForm.get('description');
    if (description?.value == '') description?.setValue('não há descricão');

    this.bookControllerService.addBook(title.value, description?.value).subscribe((book: Book[]) => {
      // this.books = book;
      window.location.reload();
    });
  }

  validateTitle(): void {}

  openFooter(): void {
    this.isFooterOpen = true;
    console.log('this.isFooterOpen', this.isFooterOpen);
  }

  closeFooterCard(): void {
    this.isFooterOpen = false;
    this.bookForm.reset();
  }

}
