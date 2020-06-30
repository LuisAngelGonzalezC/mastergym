import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSuscriptionsComponent } from './index-suscriptions.component';

describe('IndexSuscriptionsComponent', () => {
  let component: IndexSuscriptionsComponent;
  let fixture: ComponentFixture<IndexSuscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSuscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSuscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
