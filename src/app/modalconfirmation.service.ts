// This service provides the appropriate message in "confirmation" modals:
// used when a user enters the wrong password to remove a listing through the modal.component

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalconfirmationService {
  // message should be defined when service is called appropriately, but assign a default message just in case
  modalMessage = 'default message';

  constructor() {}

  // Method to store the appropriate message to pass to modal component(s)
  giveMessage(msg: string) {
    this.modalMessage = msg;
  }

  // Method to pass on the appropriate message to modal component(s)
  getMessage() {
    return this.modalMessage;
  }
}
