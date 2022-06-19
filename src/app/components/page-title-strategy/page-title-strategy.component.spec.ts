import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleStrategyComponent } from './page-title-strategy.component';

describe('PageTitleStrategyComponent', () => {
  let component: PageTitleStrategyComponent;
  let fixture: ComponentFixture<PageTitleStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageTitleStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTitleStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
