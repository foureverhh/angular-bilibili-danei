import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child02PhotoComponent } from './child02-photo.component';

describe('Child02PhotoComponent', () => {
  let component: Child02PhotoComponent;
  let fixture: ComponentFixture<Child02PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child02PhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child02PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
