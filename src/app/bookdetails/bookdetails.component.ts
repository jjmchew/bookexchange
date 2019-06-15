import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../defineclasses';
import { booksArray } from '../definedata';
import { SelectedbookService } from '../selectedbook.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  // @Input() selectedBook;
  // bookDetails: Book[];

  selectedBook: Book;

  constructor(private bookService: SelectedbookService) {
    this.selectedBook = this.bookService.giveSelectedBook();
  }

  ngOnInit() {
    // this.bookDetails = this.selectedBook;
  }
}
