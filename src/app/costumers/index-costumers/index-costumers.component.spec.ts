import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCostumersComponent } from './index-costumers.component';

describe('IndexCostumersComponent', () => {
  let component: IndexCostumersComponent;
  let fixture: ComponentFixture<IndexCostumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCostumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
