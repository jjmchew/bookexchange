import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectedbookService } from '../selectedbook.service';
import { Book } from '../defineclasses';
import { ModalconfirmationComponent } from '../modalconfirmation/modalconfirmation.component';
import { ModalconfirmationService } from '../modalconfirmation.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() postingpw;

  selectedBook: Book;
  browseBooks: boolean;
  password;
  loading: boolean = false;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private bookService: SelectedbookService,
    private confService: ModalconfirmationService
  ) {
    this.selectedBook = this.bookService.giveSelectedBook();
    this.browseBooks = this.bookService.giveModalSource();
  }

  ngOnInit() {}

  submitRemove() {
    console.log(this.password);
    console.log(this.selectedBook.postingpw);
    if (this.password === this.selectedBook.postingpw) {
      // use promise to ensure book status is updated in DB before re-loading window to show removed book
      const promise = new Promise((resolve, reject) => {
        this.loading = true;
        this.bookService
          .changeSelectedBookStatus(this.selectedBook.id)
          .toPromise()
          .then(
            res => {
              this.activeModal.close('Close click');
              window.location.reload();
              this.loading = false;
            },
            msg => reject(msg)
          );
      });
    } else {
      this.confService.giveMessage(
        `Sorry, what you entered doesn't match our records. Please try again or email sysadmin@bookexchange.com to remove this posting.`
      );
      this.modalService.open(ModalconfirmationComponent);
    }
  }
}
