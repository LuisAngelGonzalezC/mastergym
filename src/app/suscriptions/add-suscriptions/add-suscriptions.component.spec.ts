import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuscriptionsComponent } from './add-suscriptions.component';

describe('AddSuscriptionsComponent', () => {
  let component: AddSuscriptionsComponent;
  let fixture: ComponentFixture<AddSuscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSuscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
