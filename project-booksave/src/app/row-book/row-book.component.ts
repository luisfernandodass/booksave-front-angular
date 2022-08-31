import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row-book',
  templateUrl: './row-book.component.html',
  styleUrls: ['./row-book.component.scss']
})
export class RowBookComponent {

  @Input() book = '';

  constructor() { }

  getInfoBook(): void {
    const modalInfo = document.querySelector('.modal-info') as HTMLElement;
    modalInfo.style.display = 'block';

    const componentRowBook = document.querySelector('app-row-book mat-card') as HTMLElement;
    componentRowBook.appendChild(modalInfo)
  }

  editInfoBook(): void {}

  deleteBookElement(e: Event): void {
    const element = (e.currentTarget as HTMLElement).closest('mat-card') as HTMLElement;
    element.style.display = 'none';
  }
}
