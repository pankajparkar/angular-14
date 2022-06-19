import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedVariableComponent } from './protected-variable.component';

describe('ProtectedVariableComponent', () => {
  let component: ProtectedVariableComponent;
  let fixture: ComponentFixture<ProtectedVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProtectedVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
