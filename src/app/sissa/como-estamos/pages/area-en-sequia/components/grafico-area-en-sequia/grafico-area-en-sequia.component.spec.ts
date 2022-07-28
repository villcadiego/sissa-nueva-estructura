import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAreaEnSequiaComponent } from './grafico-area-en-sequia.component';

describe('GraficoAreaEnSequiaComponent', () => {
  let component: GraficoAreaEnSequiaComponent;
  let fixture: ComponentFixture<GraficoAreaEnSequiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoAreaEnSequiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoAreaEnSequiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
