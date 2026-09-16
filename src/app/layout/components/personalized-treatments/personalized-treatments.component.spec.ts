import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedTreatmentsComponent } from './personalized-treatments.component';

describe('PersonalizedTreatmentsComponent', () => {
  let component: PersonalizedTreatmentsComponent;
  let fixture: ComponentFixture<PersonalizedTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedTreatmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalizedTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
