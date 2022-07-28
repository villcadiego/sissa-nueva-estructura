import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionPeriodosComponent } from './evolucion-periodos.component';

describe('EvolucionPeriodosComponent', () => {
  let component: EvolucionPeriodosComponent;
  let fixture: ComponentFixture<EvolucionPeriodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucionPeriodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolucionPeriodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
