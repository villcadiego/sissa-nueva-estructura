import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionesSequiaComponent } from './estaciones-sequia.component';

describe('EstacionesSequiaComponent', () => {
  let component: EstacionesSequiaComponent;
  let fixture: ComponentFixture<EstacionesSequiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionesSequiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionesSequiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
