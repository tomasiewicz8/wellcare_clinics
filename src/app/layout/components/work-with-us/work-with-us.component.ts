import { Component } from '@angular/core';

import { TranslationService } from '../../../services/translation.service';
import { WorkWithUsCardComponent } from '../work-with-us-card/work-with-us-card.component';

@Component({
  selector: 'app-work-with-us',
  standalone: true,
  imports: [WorkWithUsCardComponent],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.scss',
})
export class WorkWithUsComponent {
  constructor(private translationService: TranslationService) {}

  get workWithUsArray(): any[] {
    return this.translationService.translateArray<any>('workWithUs.items') || [];
  }
}