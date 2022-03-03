import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My05Component } from './my05.component';

describe('My05Component', () => {
  let component: My05Component;
  let fixture: ComponentFixture<My05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(My05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
