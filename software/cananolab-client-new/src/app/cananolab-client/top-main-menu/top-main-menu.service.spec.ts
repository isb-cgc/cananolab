import { TestBed } from '@angular/core/testing';

import { TopMainMenuService } from './top-main-menu.service';

describe('TopMainMenuService', () => {
  let service: TopMainMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMainMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
