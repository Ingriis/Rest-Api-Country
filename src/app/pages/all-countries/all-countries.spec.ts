import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountries } from './all-countries';

describe('AllCountries', () => {
  let component: AllCountries;
  let fixture: ComponentFixture<AllCountries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCountries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCountries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
