import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitoArteComponent } from './direito-arte.component';

describe('DireitoArteComponent', () => {
  let component: DireitoArteComponent;
  let fixture: ComponentFixture<DireitoArteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireitoArteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitoArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
