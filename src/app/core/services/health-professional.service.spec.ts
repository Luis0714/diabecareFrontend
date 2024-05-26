import { TestBed } from '@angular/core/testing';

import { HealthProfessionalService } from './health-professional.service';

describe('HealthProfessionalService', () => {
  let service: HealthProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
