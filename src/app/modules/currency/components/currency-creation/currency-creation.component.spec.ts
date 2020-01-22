import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCreationComponent } from './currency-creation.component';

describe('CurrencyCreationComponent', () => {
  let component: CurrencyCreationComponent;
  let fixture: ComponentFixture<CurrencyCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
