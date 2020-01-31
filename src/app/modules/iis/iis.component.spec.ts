import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IisComponent } from './iis.component';

describe('IisComponent', () => {
  let component: IisComponent;
  let fixture: ComponentFixture<IisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
