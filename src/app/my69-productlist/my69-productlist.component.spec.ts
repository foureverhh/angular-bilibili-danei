import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My69ProductlistComponent } from './my69-productlist.component';

describe('My69ProductlistComponent', () => {
  let component: My69ProductlistComponent;
  let fixture: ComponentFixture<My69ProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ My69ProductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(My69ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
