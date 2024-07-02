import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hiba404Component } from './hiba404.component';

describe('Hiba404Component', () => {
  let component: Hiba404Component;
  let fixture: ComponentFixture<Hiba404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hiba404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hiba404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
