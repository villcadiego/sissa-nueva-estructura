import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuantoNoLlueveComponent } from './cuanto-no-llueve.component';

describe('CuantoNoLlueveComponent', () => {
  let component: CuantoNoLlueveComponent;
  let fixture: ComponentFixture<CuantoNoLlueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuantoNoLlueveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuantoNoLlueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
