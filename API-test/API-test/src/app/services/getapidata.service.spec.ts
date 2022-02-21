import { TestBed } from '@angular/core/testing';

import { GetapidataService } from './getapidata.service';

describe('GetapidataService', () => {
  let service: GetapidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetapidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
