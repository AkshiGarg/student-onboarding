import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './data.service';

describe('StudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
