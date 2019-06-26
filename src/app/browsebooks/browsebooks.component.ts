// this component displays the books in the db

import { Component, OnInit } from '@angular/core';
import { Book } from '../defineclasses';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalbookdetailsComponent } from '../modalbookdetails/modalbookdetails.component';
import { SelectedbookService } from '../selectedbook.service';

@Component({
  selector: 'app-browsebooks',
  templateUrl: './browsebooks.component.html',
  styleUrls: ['./browsebooks.component.css']
})
export class BrowsebooksComponent implements OnInit {
  localbooksArray;
  selectedBook2;

  constructor(
    private modalService: NgbModal,
    private bookService: SelectedbookService
  ) {}

  ngOnInit() {
    // grabs data from the DB to display on webpage
    var self = this;
    this.bookService.getData().subscribe(function(data) {
      console.log(data);
      self.localbooksArray = data;
    });
  }

  // method calls the modal when a book is selected by the user
  open(bookObj: Book) {
    this.bookService.getSelectedBook(bookObj, true);
    const modalRef = this.modalService.open(ModalbookdetailsComponent, {
      size: 'lg'
    });
  }
}
