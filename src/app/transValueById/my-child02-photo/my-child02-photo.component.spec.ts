import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChild02PhotoComponent } from './my-child02-photo.component';

describe('MyChild02PhotoComponent', () => {
  let component: MyChild02PhotoComponent;
  let fixture: ComponentFixture<MyChild02PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChild02PhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChild02PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
