import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc11GoodsAdminComponent } from './myc11-goods-admin.component';

describe('Myc11GoodsAdminComponent', () => {
  let component: Myc11GoodsAdminComponent;
  let fixture: ComponentFixture<Myc11GoodsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc11GoodsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc11GoodsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
