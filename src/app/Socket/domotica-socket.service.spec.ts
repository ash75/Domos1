/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DomoticaSocketService } from './domotica-socket.service';

describe('Service: DomoticaSocket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomoticaSocketService]
    });
  });

  it('should ...', inject([DomoticaSocketService], (service: DomoticaSocketService) => {
    expect(service).toBeTruthy();
  }));
});
