import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoEstamosHomeComponent } from './como-estamos-home.component';

describe('ComoEstamosHomeComponent', () => {
  let component: ComoEstamosHomeComponent;
  let fixture: ComponentFixture<ComoEstamosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoEstamosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoEstamosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
