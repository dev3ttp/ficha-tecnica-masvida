import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUsabilidadComponent } from './reporte-usabilidad.component';

describe('ReporteUsabilidadComponent', () => {
  let component: ReporteUsabilidadComponent;
  let fixture: ComponentFixture<ReporteUsabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteUsabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteUsabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
