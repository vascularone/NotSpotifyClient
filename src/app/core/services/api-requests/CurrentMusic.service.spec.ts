/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentMusicService } from './CurrentMusic.service';

describe('Service: CurrentMusic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentMusicService]
    });
  });

  it('should ...', inject([CurrentMusicService], (service: CurrentMusicService) => {
    expect(service).toBeTruthy();
  }));
});
