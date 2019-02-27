import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAPropertyComponent } from './post-a-property.component';

describe('PostAPropertyComponent', () => {
  let component: PostAPropertyComponent;
  let fixture: ComponentFixture<PostAPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
