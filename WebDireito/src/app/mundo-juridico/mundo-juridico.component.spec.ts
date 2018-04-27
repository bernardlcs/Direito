import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoJuridicoComponent } from './mundo-juridico.component';

describe('MundoJuridicoComponent', () => {
  let component: MundoJuridicoComponent;
  let fixture: ComponentFixture<MundoJuridicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundoJuridicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MundoJuridicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
