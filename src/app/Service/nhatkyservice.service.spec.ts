/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NhatkyserviceService } from './nhatkyservice.service';

describe('Service: Nhatkyservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NhatkyserviceService]
    });
  });

  it('should ...', inject([NhatkyserviceService], (service: NhatkyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
