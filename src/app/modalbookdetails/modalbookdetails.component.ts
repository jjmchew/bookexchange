// This modal is a "wrapper" for the modal used to display book details which can be called from
// browsebooks or addbooks (as a confirmation of adding a listing)

import { Component, OnInit, Input } from '@angular/core';
import { BrowsebooksComponent } from '../browsebooks/browsebooks.component';
import { Book } from '../defineclasses';
import { SelectedbookService } from '../selectedbook.service';

@Component({
  selector: 'app-modalbookdetails',
  templateUrl: './modalbookdetails.component.html',
  styleUrls: ['./modalbookdetails.component.css']
})
export class ModalbookdetailsComponent implements OnInit {
  selectedBook2: Book;

  // selected book for the modal is provided through the selectedbook service
  constructor(private bookService: SelectedbookService) {
    this.selectedBook2 = this.bookService.giveSelectedBook();
  }

  ngOnInit() {}
}
