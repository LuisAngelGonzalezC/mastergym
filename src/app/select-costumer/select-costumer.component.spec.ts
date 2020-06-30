import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCostumerComponent } from './select-costumer.component';

describe('SelectCostumerComponent', () => {
  let component: SelectCostumerComponent;
  let fixture: ComponentFixture<SelectCostumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCostumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
