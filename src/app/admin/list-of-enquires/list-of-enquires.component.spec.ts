import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEnquiresComponent } from './list-of-enquires.component';

describe('ListOfEnquiresComponent', () => {
  let component: ListOfEnquiresComponent;
  let fixture: ComponentFixture<ListOfEnquiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfEnquiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEnquiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
