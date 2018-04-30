import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasJuridicasComponent } from './dicas-juridicas.component';

describe('DicasJuridicasComponent', () => {
  let component: DicasJuridicasComponent;
  let fixture: ComponentFixture<DicasJuridicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicasJuridicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicasJuridicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
