import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child01ModifyComponent } from './child01-modify.component';

describe('Child01ModifyComponent', () => {
  let component: Child01ModifyComponent;
  let fixture: ComponentFixture<Child01ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child01ModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child01ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
