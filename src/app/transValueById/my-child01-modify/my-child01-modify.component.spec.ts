import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChild01ModifyComponent } from './my-child01-modify.component';

describe('MyChild01ModifyComponent', () => {
  let component: MyChild01ModifyComponent;
  let fixture: ComponentFixture<MyChild01ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChild01ModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChild01ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
