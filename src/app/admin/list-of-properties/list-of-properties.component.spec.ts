import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPropertiesComponent } from './list-of-properties.component';

describe('ListOfPropertiesComponent', () => {
  let component: ListOfPropertiesComponent;
  let fixture: ComponentFixture<ListOfPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
