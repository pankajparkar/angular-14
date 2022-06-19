import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPrimitivesMenuComponent } from './built-in-primitives-menu.component';

describe('BuiltInPrimitivesMenuComponent', () => {
  let component: BuiltInPrimitivesMenuComponent;
  let fixture: ComponentFixture<BuiltInPrimitivesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuiltInPrimitivesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInPrimitivesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
