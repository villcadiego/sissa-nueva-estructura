import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionPeriodosComponent } from './comparacion-periodos.component';

describe('ComparacionPeriodosComponent', () => {
  let component: ComparacionPeriodosComponent;
  let fixture: ComponentFixture<ComparacionPeriodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparacionPeriodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparacionPeriodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
