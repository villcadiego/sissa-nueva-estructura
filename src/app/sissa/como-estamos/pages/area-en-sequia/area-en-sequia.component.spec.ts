import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEnSequiaComponent } from './area-en-sequia.component';

describe('AreaEnSequiaComponent', () => {
  let component: AreaEnSequiaComponent;
  let fixture: ComponentFixture<AreaEnSequiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaEnSequiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaEnSequiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
