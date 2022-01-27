import { TestBed } from '@angular/core/testing';

import { IssDetailsService } from './iss-details.service';

describe('IssDetailsService', () => {
  let service: IssDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
