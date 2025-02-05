import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBackendComponent } from './portfolio-backend.component';

describe('PortfolioBackendComponent', () => {
  let component: PortfolioBackendComponent;
  let fixture: ComponentFixture<PortfolioBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioBackendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
