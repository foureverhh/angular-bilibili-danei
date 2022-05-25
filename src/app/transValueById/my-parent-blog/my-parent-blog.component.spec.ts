import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParentBlogComponent } from './my-parent-blog.component';

describe('MyParentBlogComponent', () => {
  let component: MyParentBlogComponent;
  let fixture: ComponentFixture<MyParentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyParentBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
