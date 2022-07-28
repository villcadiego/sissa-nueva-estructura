import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasSequiaComponent } from './zonas-sequia.component';

describe('ZonasSequiaComponent', () => {
  let component: ZonasSequiaComponent;
  let fixture: ComponentFixture<ZonasSequiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasSequiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasSequiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
