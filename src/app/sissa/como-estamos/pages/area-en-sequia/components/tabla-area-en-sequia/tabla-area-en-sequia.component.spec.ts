import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAreaEnSequiaComponent } from './tabla-area-en-sequia.component';

describe('TablaAreaEnSequiaComponent', () => {
  let component: TablaAreaEnSequiaComponent;
  let fixture: ComponentFixture<TablaAreaEnSequiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAreaEnSequiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAreaEnSequiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
