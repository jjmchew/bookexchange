// This component used to "wrap" the "confirmation modal" called when removing a listing
// uses ng-bootstrap (distinct from Bootstrap)

import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalconfirmationService } from '../modalconfirmation.service';

@Component({
  selector: 'app-modalconfirmation',
  templateUrl: './modalconfirmation.component.html',
  styleUrls: ['./modalconfirmation.component.css']
})
export class ModalconfirmationComponent implements OnInit {
  localModalMessage: string;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private confService: ModalconfirmationService
  ) {
    // the message used for the modal comes from the Modalconfirmation service
    this.localModalMessage = this.confService.getMessage();
  }

  ngOnInit() {}
}
