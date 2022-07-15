import { TestBed } from '@angular/core/testing';

import { TopKeywordSearchService } from './top-keyword-search.service';

describe('TopKeywordSearchService', () => {
  let service: TopKeywordSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopKeywordSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
