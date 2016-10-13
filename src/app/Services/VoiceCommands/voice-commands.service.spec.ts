/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoiceCommandsService } from './voice-commands.service';

describe('Service: VoiceCommands', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoiceCommandsService]
    });
  });

  it('should ...', inject([VoiceCommandsService], (service: VoiceCommandsService) => {
    expect(service).toBeTruthy();
  }));
});
