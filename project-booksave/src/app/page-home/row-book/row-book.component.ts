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
  @Output() deleteBook$ = new EventEmitter<any>();
  public panelOpenState = false;

  constructor(private bookControllerService: BookControllerService) { }

  deleteBook(e: Event): void {
    let id = 0;
    id++;
    const element = (e.currentTarget as HTMLElement).closest('mat-expansion-panel') as HTMLElement;
    const title = element.querySelector('.title')?.textContent?.trim();
    const description = element.querySelector('.description')?.textContent?.trim();
    this.deleteBook$.emit({title, description, id});
    element.style.display = 'none';
  }
}
