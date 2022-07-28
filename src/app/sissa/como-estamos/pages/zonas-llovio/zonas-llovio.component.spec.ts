import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasLlovioComponent } from './zonas-llovio.component';

describe('ZonasLlovioComponent', () => {
  let component: ZonasLlovioComponent;
  let fixture: ComponentFixture<ZonasLlovioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasLlovioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasLlovioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
