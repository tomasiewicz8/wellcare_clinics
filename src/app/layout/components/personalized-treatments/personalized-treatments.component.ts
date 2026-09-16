import { Component } from '@angular/core';

import { TranslationService } from '../../../services/translation.service';
import { PersonalizedTreatmentsCardComponent } from '../personalized-treatments-card/personalized-treatments-card.component';

@Component({
  selector: 'app-personalized-treatments',
  standalone: true,
  imports: [PersonalizedTreatmentsCardComponent],
  templateUrl: './personalized-treatments.component.html',
  styleUrl: './personalized-treatments.component.scss',
})
export class PersonalizedTreatmentsComponent {
  constructor(public translationService: TranslationService) {}

  get treatments(): any[] {
    return this.translationService.translateArray<any>(
      'personalizedTreatments.items',
    );
  }
}