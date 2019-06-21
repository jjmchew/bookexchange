import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() postingpw;

  password;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  testfunction() {
    console.log(this.password);
    this.activeModal.close('Close click');
  }
}
