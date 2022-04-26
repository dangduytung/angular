import { TestBed } from '@angular/core/testing';

import { ForecastDailyService } from './forecast-daily.service';

describe('ForecastDailyService', () => {
  let service: ForecastDailyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastDailyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
