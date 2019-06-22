import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalconfirmationService {
  modalMessage = 'default message';

  constructor() {}

  giveMessage(msg: string) {
    this.modalMessage = msg;
  }

  getMessage() {
    return this.modalMessage;
  }
}
