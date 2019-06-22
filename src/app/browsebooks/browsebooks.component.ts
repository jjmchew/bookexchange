import { Component, OnInit } from '@angular/core';
import { Book } from '../defineclasses';
// import { booksArray } from '../definedata';
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
  title = 'app';
  selectedBook2;

  constructor(
    private modalService: NgbModal,
    private bookService: SelectedbookService
  ) {
    // this.localbooksArray = booksArray;
  }

  ngOnInit() {
    var self = this;
    this.bookService.getData().subscribe(function(data) {
      console.log(data);
      self.localbooksArray = data;
    });

    // this.bookService.getData().subscribe(function(data) {
    //   console.log(data);
    //   this.localbooksArray = data;
    // });
  }

  open(bookObj: Book) {
    this.bookService.getSelectedBook(bookObj, true);
    const modalRef = this.modalService.open(ModalbookdetailsComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.title = 'from browsebooks';
  }
}
