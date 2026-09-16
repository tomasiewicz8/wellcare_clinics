import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedTreatmentsCardComponent } from './personalized-treatments-card.component';

describe('PersonalizedTreatmentsCardComponent', () => {
  let component: PersonalizedTreatmentsCardComponent;
  let fixture: ComponentFixture<PersonalizedTreatmentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedTreatmentsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalizedTreatmentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
