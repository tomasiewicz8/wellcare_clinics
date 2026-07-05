import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalCardComponent } from './diagonal-card.component';

describe('DiagonalCardComponent', () => {
  let component: DiagonalCardComponent;
  let fixture: ComponentFixture<DiagonalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagonalCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagonalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
