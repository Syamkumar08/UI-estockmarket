import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAStockComponent } from './find-a-stock.component';

describe('FindAStockComponent', () => {
  let component: FindAStockComponent;
  let fixture: ComponentFixture<FindAStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
