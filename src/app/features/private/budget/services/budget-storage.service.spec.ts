import { TestBed } from '@angular/core/testing';

import { BudgetStorageService } from './budget-storage.service';

describe('BudgetStorageService', () => {
  let service: BudgetStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
