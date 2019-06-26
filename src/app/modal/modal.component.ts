// this component used to define/display the modal "frame"; content of modal is defined by bookdetails component
// also defines form/functions for "remove posting" dropdown when viewed from browsebooks page
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectedbookService } from '../selectedbook.service';
import { Book } from '../defineclasses';
import { ModalconfirmationComponent } from '../modalconfirmation/modalconfirmation.component';
import { ModalconfirmationService } from '../modalconfirmation.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() postingpw;

  // used to track the selected book
  selectedBook: Book;

  // used to track whether modal was called from browsebooks (since content will vary)
  browseBooks: boolean;

  // used to track the password entered by user to remove posting
  password;

  // used for display of 'working' message while waiting for HTTP patch request promise
  loading = false;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private bookService: SelectedbookService,
    private confService: ModalconfirmationService,
    private routerService: Router
  ) {
    // determine selectedBook and source of modal call immediately
    this.selectedBook = this.bookService.giveSelectedBook();
    this.browseBooks = this.bookService.giveModalSource();
  }

  ngOnInit() {}

  // function called when user submits "confirm removal" button / form
  submitRemove() {
    // for debugging:
    console.log(this.password);
    console.log(this.selectedBook.postingpw);

    // confirm entered password is same as stored posting password entered on initial listing creation
    if (this.password === this.selectedBook.postingpw) {
      // use promise to ensure book status is updated in DB before re-loading window to show removed book
      const promise = new Promise((resolve, reject) => {
        this.loading = true;
        // update of listing status in DB part of promise
        this.bookService
          .changeSelectedBookStatus(this.selectedBook.id)
          .toPromise()
          .then(
            res => {
              // once update completed, can close the modal window automatically
              this.activeModal.close('Close click');
              // wanted to just reload the browsebooks page to show listing has been removed, but
              // am reloading the home page since this function acts as "external" URL call and internal
              // routes do not work
              window.location.href =
                'http://jjmchew.a2hosted.com/bookexchange2/index.html';
              this.loading = false;
            },
            msg => reject(msg)
          );
      });
    } else {
      // provides appropriate message and calls modalconfirmation if passwords do not match
      this.confService.giveMessage(
        `Sorry, what you entered doesn't match our records. Please try again or email sysadmin@bookexchange.com to remove this posting.`
      );
      this.modalService.open(ModalconfirmationComponent);
    }
  }
}
