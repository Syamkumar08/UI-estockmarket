import { TestBed } from '@angular/core/testing';

import { EStockMarketService } from './e-stock-market.service';

describe('EStockMarketService', () => {
  let service: EStockMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EStockMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
