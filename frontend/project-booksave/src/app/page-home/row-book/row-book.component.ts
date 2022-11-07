import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookControllerService } from 'src/app/shared/services/book-controller.service';

@Component({
  selector: 'app-row-book',
  templateUrl: './row-book.component.html',
  styleUrls: ['./row-book.component.scss']
})
export class RowBookComponent implements OnInit {

  @Input() title;
  @Input() description;
  public panelOpenState = false;
  public editDescription = false;

  form = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  })

  constructor(private bookControllerService: BookControllerService) { }

  ngOnInit(): void {
    this.form.get('description').setValue(this.description);
  }

  deleteBook(e: Event): void {
    const element = (e.currentTarget as HTMLElement).closest('mat-expansion-panel') as HTMLElement;
    const title = element.querySelector('.title')?.textContent;
    element.style.display = 'none';
    this.bookControllerService.deleteBookByTitle(title).subscribe();
  }

  updateBook(e: Event): void {
    const element = (e.currentTarget as HTMLElement).closest('mat-expansion-panel') as HTMLElement;
    const title = element.querySelector('.title')?.textContent.trim();
    const description = this.form.get('description');
    this.bookControllerService.updateBook(title, description.value).subscribe();
  }

  openEditBook(e: Event): void {
    this.editDescription = true;
  }

  cancelEdit(): void {
    this.editDescription = false;
  }
}
