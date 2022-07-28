import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionesLlovioComponent } from './estaciones-llovio.component';

describe('EstacionesLlovioComponent', () => {
  let component: EstacionesLlovioComponent;
  let fixture: ComponentFixture<EstacionesLlovioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionesLlovioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstacionesLlovioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
