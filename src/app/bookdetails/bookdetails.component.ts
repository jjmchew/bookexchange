// gets the selectedbook from the selectedbook service and then displays additional details
// associated with the book

import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../defineclasses';
import { SelectedbookService } from '../selectedbook.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  selectedBook: Book;

  constructor(private bookService: SelectedbookService) {
    this.selectedBook = this.bookService.giveSelectedBook();
  }

  ngOnInit() {}
}
