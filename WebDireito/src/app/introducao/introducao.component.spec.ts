import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducaoComponent } from './introducao.component';

describe('IntroducaoComponent', () => {
  let component: IntroducaoComponent;
  let fixture: ComponentFixture<IntroducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
