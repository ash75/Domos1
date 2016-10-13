/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToasterAltaiService } from './toaster-altai.service';

describe('Service: ToasterAltai', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterAltaiService]
    });
  });

  it('should ...', inject([ToasterAltaiService], (service: ToasterAltaiService) => {
    expect(service).toBeTruthy();
  }));
});
