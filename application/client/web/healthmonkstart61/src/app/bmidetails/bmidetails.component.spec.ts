import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmidetailsComponent } from './bmidetails.component';

describe('BmidetailsComponent', () => {
  let component: BmidetailsComponent;
  let fixture: ComponentFixture<BmidetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmidetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});