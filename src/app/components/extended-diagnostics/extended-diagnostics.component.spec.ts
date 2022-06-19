import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedDiagnosticsComponent } from './extended-diagnostics.component';

describe('ExtendedDiagnosticsComponent', () => {
  let component: ExtendedDiagnosticsComponent;
  let fixture: ComponentFixture<ExtendedDiagnosticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExtendedDiagnosticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedDiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
