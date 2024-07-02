import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggoloComponent } from './loggolo.component';

describe('LoggoloComponent', () => {
  let component: LoggoloComponent;
  let fixture: ComponentFixture<LoggoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
