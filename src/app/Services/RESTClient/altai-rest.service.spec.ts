/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AltaiRestService } from './altai-rest.service';

describe('Service: AltaiRest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AltaiRestService]
    });
  });

  it('should ...', inject([AltaiRestService], (service: AltaiRestService) => {
    expect(service).toBeTruthy();
  }));
});
