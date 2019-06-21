import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectedbookService } from '../selectedbook.service';
import { Book } from '../defineclasses';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() postingpw;

  selectedBook: Book;
  password;

  constructor(
    public activeModal: NgbActiveModal,
    private bookService: SelectedbookService
  ) {
    this.selectedBook = this.bookService.giveSelectedBook();
  }

  ngOnInit() {}

  testfunction() {
    console.log(this.password);
    if (this.password === this.selectedBook.postingpw) {
      console.log('passwords match!!');
    } else {
      console.log(`password don't match!`);
    }
    this.activeModal.close('Close click');
  }
}
