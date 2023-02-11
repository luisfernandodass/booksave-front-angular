import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  titleIsEmpty = true;

  bookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    console.log(this)
  }

  addBook(): void {}

  validateTitle(): void {}

}
