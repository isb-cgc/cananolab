import { TestBed } from '@angular/core/testing';

import { MainDisplayService } from './main-display.service';

describe('MainDisplayService', () => {
  let service: MainDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
