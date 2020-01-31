import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevantarNavegadorComponent } from './levantar-navegador.component';

describe('LevantarNavegadorComponent', () => {
  let component: LevantarNavegadorComponent;
  let fixture: ComponentFixture<LevantarNavegadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevantarNavegadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevantarNavegadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
