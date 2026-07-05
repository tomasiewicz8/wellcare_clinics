import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [NgIf],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  @Input() titleKey = '';

  constructor(public translationService: TranslationService) {}

  get title(): string {
    return this.translationService.translate(this.titleKey);
  }
}