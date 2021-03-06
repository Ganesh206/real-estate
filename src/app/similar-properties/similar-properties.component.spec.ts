import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPropertiesComponent } from './similar-properties.component';

describe('SimilarPropertiesComponent', () => {
  let component: SimilarPropertiesComponent;
  let fixture: ComponentFixture<SimilarPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
