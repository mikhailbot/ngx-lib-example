import { TestBed } from '@angular/core/testing';

import { NgxColoursLibService } from './ngx-colours-lib.service';

describe('NgxColoursLibService', () => {
  let service: NgxColoursLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxColoursLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
