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
    if (this.password === this.selectedBook.postingpw) {
      this.bookService
        .changeSelectedBookStatus(this.selectedBook.id)
        .subscribe(data => {
          console.log(data);
        });
      this.confService.giveMessage('Posting Removed');
      // this.modalService.open(ModalconfirmationComponent);
      console.log('passwords match!!');
      this.activeModal.close('Close click');
      window.location.reload();
    } else {
      this.confService.giveMessage(
        `Sorry, the password entered doesn't match our records.  Please try again or email sysadmin@bookexchange.com if you really want to remove this posting.`
      );
      this.modalService.open(ModalconfirmationComponent);
      console.log(`passwords don't match!`);
    }
  }
}
