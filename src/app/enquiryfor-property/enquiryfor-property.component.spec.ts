import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryforPropertyComponent } from './enquiryfor-property.component';

describe('EnquiryforPropertyComponent', () => {
  let component: EnquiryforPropertyComponent;
  let fixture: ComponentFixture<EnquiryforPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryforPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryforPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
