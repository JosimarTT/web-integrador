import { TestBed } from '@angular/core/testing';

import { DescriptionsService } from './descriptions.service';

describe('DescriptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescriptionsService = TestBed.get(DescriptionsService);
    expect(service).toBeTruthy();
  });
});
