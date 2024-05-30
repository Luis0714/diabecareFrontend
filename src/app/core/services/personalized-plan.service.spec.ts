import { TestBed } from '@angular/core/testing';

import { PersonalizedPlanService } from './personalized-plan.service';

describe('PersonalizedPlanService', () => {
  let service: PersonalizedPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalizedPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
