import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookControllerService } from 'src/app/shared/services/book-controller.service';

@Component({
  selector: 'app-row-book',
  templateUrl: './row-book.component.html',
  styleUrls: ['./row-book.component.scss']
})
export class RowBookComponent {

  @Input() title;
  @Input() description;
  public panelOpenState = false;
  public editDescription = false;

  constructor(private bookControllerService: BookControllerService) { }

  deleteBook(e: Event): void {
    const element = (e.currentTarget as HTMLElement).closest('mat-expansion-panel') as HTMLElement;
    const title = element.querySelector('.title')?.textContent;
    element.style.display = 'none';
    this.bookControllerService.deleteBookByTitle(title).subscribe();
  }

  updateBook(e: Event): void {
    const element = (e.currentTarget as HTMLElement).closest('mat-expansion-panel') as HTMLElement;
    const title = element.querySelector('.title')?.textContent.trim();
    const description = element.querySelector('.edit-description').textContent;

    this.bookControllerService.updateBook(title, description).subscribe();
  }

  openEditBook(e: Event): void {
    this.editDescription = true;
  }

  cancelEdit(): void {
    this.editDescription = false;
  }
}
