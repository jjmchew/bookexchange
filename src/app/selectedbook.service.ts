import { Injectable } from '@angular/core';
import { Book } from './defineclasses';

@Injectable({
  providedIn: 'root'
})
export class SelectedbookService {
  selectedBook: Book;

  constructor() {}

  getSelectedBook(x: Book) {
    this.selectedBook = x;
  }

  giveSelectedBook() {
    return this.selectedBook;
  }
}
