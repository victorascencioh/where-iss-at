import { TestBed } from '@angular/core/testing';

import { IssApiService } from './iss-api.service';

describe('IssApiService', () => {
  let service: IssApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
