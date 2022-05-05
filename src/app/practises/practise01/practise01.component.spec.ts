import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise01Component } from './practise01.component';

describe('Practise01Component', () => {
  let component: Practise01Component;
  let fixture: ComponentFixture<Practise01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practise01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practise01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
