import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindACompanyComponent } from './find-a-company.component';

describe('FindACompanyComponent', () => {
  let component: FindACompanyComponent;
  let fixture: ComponentFixture<FindACompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindACompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindACompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
