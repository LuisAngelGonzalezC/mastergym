import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPricesComponent } from './index-prices.component';

describe('IndexPricesComponent', () => {
  let component: IndexPricesComponent;
  let fixture: ComponentFixture<IndexPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
