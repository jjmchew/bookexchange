import { Component, OnInit } from '@angular/core';
import { Book } from '../defineclasses';
import { booksArray } from '../definedata';
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
    this.localbooksArray = booksArray;
  }

  ngOnInit() {
    var self = this;
    this.bookService.getData().subscribe(function(data){
      console.log(data);
      self.localbooksArray = data;
    });
  }

  open(bookObj: Book) {
    // this.selectedBook2 = bookObj;
    // this.Modalbookdetails.assignBook(bookObj);
    this.bookService.getSelectedBook(bookObj);
    const modalRef = this.modalService.open(ModalbookdetailsComponent);
    modalRef.componentInstance.title = 'from browsebooks';
  }
}
