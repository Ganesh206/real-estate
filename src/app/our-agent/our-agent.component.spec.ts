import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAgentComponent } from './our-agent.component';

describe('OurAgentComponent', () => {
  let component: OurAgentComponent;
  let fixture: ComponentFixture<OurAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
