import { TestBed } from '@angular/core/testing';

import { SelectedbookService } from './selectedbook.service';

describe('SelectedbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedbookService = TestBed.get(SelectedbookService);
    expect(service).toBeTruthy();
  });
});
