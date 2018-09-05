import { TestBed, inject } from '@angular/core/testing';

import { AtpServiceService } from './atp-service.service';

describe('AtpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtpServiceService]
    });
  });

  it('should be created', inject([AtpServiceService], (service: AtpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
