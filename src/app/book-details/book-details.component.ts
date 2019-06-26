// unused component

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedbookService } from '../selectedbook.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book;

  constructor(
    private route: ActivatedRoute,
    private bookService: SelectedbookService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const self = this;
    this.bookService.getBookDetails(id).subscribe(function(data) {
      console.log(data);
      self.book = data;
    });
  }
}
