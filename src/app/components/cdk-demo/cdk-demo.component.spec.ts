import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDemoComponent } from './cdk-demo.component';

describe('CdkDemoComponent', () => {
  let component: CdkDemoComponent;
  let fixture: ComponentFixture<CdkDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CdkDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
