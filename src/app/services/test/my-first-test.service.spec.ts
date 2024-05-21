import { TestBed } from '@angular/core/testing';

import { MyFirstTestService } from './my-first-test.service';

describe('MyFirstTestService', () => {
  let service: MyFirstTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
