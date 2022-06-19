import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPrimitivesDialogComponent } from './built-in-primitives-dialog.component';

describe('BuiltInPrimitivesDialogComponent', () => {
  let component: BuiltInPrimitivesDialogComponent;
  let fixture: ComponentFixture<BuiltInPrimitivesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuiltInPrimitivesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInPrimitivesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
