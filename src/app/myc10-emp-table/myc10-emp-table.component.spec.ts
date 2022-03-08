import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc10EmpTableComponent } from './myc10-emp-table.component';

describe('Myc10EmpTableComponent', () => {
  let component: Myc10EmpTableComponent;
  let fixture: ComponentFixture<Myc10EmpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc10EmpTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc10EmpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
