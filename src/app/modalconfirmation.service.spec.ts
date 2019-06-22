import { TestBed } from '@angular/core/testing';

import { ModalconfirmationService } from './modalconfirmation.service';

describe('ModalconfirmationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalconfirmationService = TestBed.get(
      ModalconfirmationService
    );
    expect(service).toBeTruthy();
  });
});
