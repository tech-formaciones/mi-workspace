import { TestBed } from '@angular/core/testing';

import { MiLibService } from './mi-lib.service';

describe('MiLibService', () => {
  let service: MiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
