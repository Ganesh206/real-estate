import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertDetailsComponent } from './propert-details.component';

describe('PropertDetailsComponent', () => {
  let component: PropertDetailsComponent;
  let fixture: ComponentFixture<PropertDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
