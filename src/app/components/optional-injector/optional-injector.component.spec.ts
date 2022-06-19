import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalInjectorComponent } from './optional-injector.component';

describe('OptionalInjectorComponent', () => {
  let component: OptionalInjectorComponent;
  let fixture: ComponentFixture<OptionalInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OptionalInjectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
