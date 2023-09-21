import { TestBed } from '@angular/core/testing';

import { SpellsDataService } from './spells-data.service';

describe('SpellsDataService', () => {
  let service: SpellsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
