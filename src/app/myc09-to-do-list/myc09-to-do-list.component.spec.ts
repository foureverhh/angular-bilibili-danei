import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc09ToDoListComponent } from './myc09-to-do-list.component';

describe('Myc09ToDoListComponent', () => {
  let component: Myc09ToDoListComponent;
  let fixture: ComponentFixture<Myc09ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc09ToDoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc09ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
