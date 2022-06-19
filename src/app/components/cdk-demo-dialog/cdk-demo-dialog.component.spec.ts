import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDemoDialogComponent } from './cdk-demo-dialog.component';

describe('CdkDemoDialogComponent', () => {
  let component: CdkDemoDialogComponent;
  let fixture: ComponentFixture<CdkDemoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CdkDemoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkDemoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
