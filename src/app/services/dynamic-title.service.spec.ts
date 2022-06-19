import { TestBed } from '@angular/core/testing';

import { DynamicTitleService } from './dynamic-title.service';

describe('DynamicTitleService', () => {
  let service: DynamicTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
