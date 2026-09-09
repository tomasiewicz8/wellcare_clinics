import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-section-description',
  standalone: true,
  imports: [NgIf],
  templateUrl: './section-description.component.html',
  styleUrl: './section-description.component.scss',
})
export class SectionDescriptionComponent {
  @Input() textKey = '';

  constructor(public translationService: TranslationService) {}

  get text(): string {
    return this.translationService.translate(this.textKey);
  }
}