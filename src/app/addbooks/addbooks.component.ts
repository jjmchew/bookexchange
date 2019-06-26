// component defines/displays the addbooks page to add listings to DB

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SelectedbookService } from '../selectedbook.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalbookdetailsComponent } from '../modalbookdetails/modalbookdetails.component';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  addBookGroup;

  constructor(
    private formB: FormBuilder,
    private modalService: NgbModal,
    private bookService: SelectedbookService,
    private routerService: Router
  ) {
    // defines validators for addbooks form
    // note:  "stock" email validator used, but not ideal - will accept j@j without a full domain
    this.addBookGroup = this.formB.group({
      title: ['', [Validators.required]],
      author: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z-]*[ ]+[a-zA-Z-][a-zA-Z]*')
        ]
      ],
      publishdate: [
        '',
        [Validators.required, Validators.pattern('[1-9][0-9][0-9][0-9]')]
      ],
      category: ['', [Validators.required]],
      coversrc: [''],
      contact: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[1-9][0-9][0-9][-|.| ][1-9][0-9][0-9][-|.| ][0-9][0-9][0-9][0-9]'
          )
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      postingpw: ['', [Validators.required, Validators.minLength(8)]],
      abstract: [''],
      status: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    // all new books added are automatically assigned the status of "active"
    this.addBookGroup.value.status = 'active';

    // if no cover image URL is added then a suitable placeholder is automatically provided at the
    // right aspect ratio
    if (!this.addBookGroup.value.coversrc) {
      this.addBookGroup.value.coversrc = 'http://placehold.it/313x475';
    }

    // promise to confirm DB update happens before modal display and navigation
    const promise = new Promise((resolve, reject) => {
      this.bookService
        // calls HTTP put request to DB
        .addItem(this.addBookGroup.value)
        .toPromise()
        .then(
          res => {
            this.bookService.getSelectedBook(this.addBookGroup.value, false);
            const modalRef = this.modalService.open(ModalbookdetailsComponent, {
              size: 'lg'
            });

            // after book added, navigate to browsebooks page
            this.routerService.navigateByUrl('/browsebooks');
          },
          msg => reject(msg)
        );
    });
  }
}
