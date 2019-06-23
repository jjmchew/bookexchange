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
    // Validators.pattern('(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}')
  }

  ngOnInit() {}

  onSubmit() {
    this.addBookGroup.value.status = 'active';
    if (!this.addBookGroup.value.coversrc) {
      this.addBookGroup.value.coversrc = 'http://placehold.it/313x475';
    }

    const promise = new Promise((resolve, reject) => {
      this.bookService
        .addItem(this.addBookGroup.value)
        .toPromise()
        .then(
          res => {
            this.bookService.getSelectedBook(this.addBookGroup.value, false);
            const modalRef = this.modalService.open(ModalbookdetailsComponent, {
              size: 'lg'
            });
            modalRef.componentInstance.title = 'from browsebooks';
            this.routerService.navigateByUrl('/browsebooks');
            // window.location.reload();
          },
          msg => reject(msg)
        );
    });
  }
}
