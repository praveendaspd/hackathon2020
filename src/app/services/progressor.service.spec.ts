import { TestBed } from '@angular/core/testing';

import { ProgressorService } from './progressor.service';

describe('TutorialService', () => {
  let service: ProgressorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
