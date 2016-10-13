/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppGlobalDataService } from './app-global-data.service';

describe('Service: AppGlobalData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGlobalDataService]
    });
  });

  it('should ...', inject([AppGlobalDataService], (service: AppGlobalDataService) => {
    expect(service).toBeTruthy();
  }));
});
