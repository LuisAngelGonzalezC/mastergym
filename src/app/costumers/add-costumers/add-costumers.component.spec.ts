import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostumersComponent } from './add-costumers.component';

describe('AddCostumersComponent', () => {
  let component: AddCostumersComponent;
  let fixture: ComponentFixture<AddCostumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCostumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
