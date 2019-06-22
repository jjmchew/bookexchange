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
    this.localModalMessage = this.confService.getMessage();
  }

  ngOnInit() {}
}
