import { TestBed, inject } from '@angular/core/testing';

import { PractiseService } from './practise.service';

describe('PractiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PractiseService]
    });
  });

  it('should be created', inject([PractiseService], (service: PractiseService) => {
    expect(service).toBeTruthy();
  }));
});
