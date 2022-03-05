import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc08NgModelComponent } from './myc08-ng-model.component';

describe('Myc08NgModelComponent', () => {
  let component: Myc08NgModelComponent;
  let fixture: ComponentFixture<Myc08NgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc08NgModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc08NgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
