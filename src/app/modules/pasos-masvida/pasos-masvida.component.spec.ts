import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosMasvidaComponent } from './pasos-masvida.component';

describe('PasosMasvidaComponent', () => {
  let component: PasosMasvidaComponent;
  let fixture: ComponentFixture<PasosMasvidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasosMasvidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosMasvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
