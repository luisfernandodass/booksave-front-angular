import { TestBed } from '@angular/core/testing';

import { BookControllerService } from './book-controller.service';

describe('BookControllerService', () => {
  let service: BookControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
