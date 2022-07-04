import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivedetailsComponent } from './activedetails.component';

describe('ActivedetailsComponent', () => {
  let component: ActivedetailsComponent;
  let fixture: ComponentFixture<ActivedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});