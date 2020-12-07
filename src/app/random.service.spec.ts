import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('int method should return random number in given range', () => {
    const result = service.int(5, 10);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('int method should return random number from 0 to max if only one param is given', () => {
    const result = service.int(17);
    expect(result).toBeGreaterThanOrEqual(  0);
    expect(result).toBeLessThanOrEqual(17);
  });

  it('fromArray should return random item of given array', () => {
    const arr = [1, 2, 3];
    const result = service.fromArray(arr);
    expect(result).toBeCloseTo(2, -1);
  });


});
