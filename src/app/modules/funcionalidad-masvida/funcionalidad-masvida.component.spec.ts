import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadMasvidaComponent } from './funcionalidad-masvida.component';

describe('FuncionalidadMasvidaComponent', () => {
  let component: FuncionalidadMasvidaComponent;
  let fixture: ComponentFixture<FuncionalidadMasvidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalidadMasvidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalidadMasvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
