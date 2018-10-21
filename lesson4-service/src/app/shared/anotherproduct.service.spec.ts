import { TestBed } from '@angular/core/testing';

import { AnotherproductService } from './anotherproduct.service';

describe('AnotherproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherproductService = TestBed.get(AnotherproductService);
    expect(service).toBeTruthy();
  });
});
