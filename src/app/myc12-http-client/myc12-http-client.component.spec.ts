import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc12HttpClientComponent } from './myc12-http-client.component';

describe('Myc12HttpClientComponent', () => {
  let component: Myc12HttpClientComponent;
  let fixture: ComponentFixture<Myc12HttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc12HttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc12HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
