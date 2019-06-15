import { Component, OnInit, Input } from '@angular/core';
import { BrowsebooksComponent } from '../browsebooks/browsebooks.component';
import { Book } from '../defineclasses';
import { booksArray } from '../definedata';
import { SelectedbookService } from '../selectedbook.service';

@Component({
  selector: 'app-modalbookdetails',
  templateUrl: './modalbookdetails.component.html',
  styleUrls: ['./modalbookdetails.component.css']
})
export class ModalbookdetailsComponent implements OnInit {
  // selectedBook2: Book = booksArray[1];
  selectedBook2: Book;

  constructor(private bookService: SelectedbookService) {
    this.selectedBook2 = this.bookService.giveSelectedBook();
  }

  ngOnInit() {}
}
