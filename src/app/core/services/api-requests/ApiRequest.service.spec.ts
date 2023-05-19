/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiRequestService } from './ApiRequest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: ApiRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiRequestService]
    });
  });

  it('should ...', inject([ApiRequestService], (service: ApiRequestService, httpMock: HttpTestingController) => {
    expect(service).toBeTruthy();
  }));
});
