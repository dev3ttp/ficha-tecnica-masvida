import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuioscoComponent } from './quiosco.component';

describe('QuioscoComponent', () => {
  let component: QuioscoComponent;
  let fixture: ComponentFixture<QuioscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuioscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuioscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
