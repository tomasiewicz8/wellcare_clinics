import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-main-photo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './main-photo.component.html',
  styleUrl: './main-photo.component.scss',
})
export class MainPhotoComponent {
  @Input() heroKey = '';

  constructor(public translationService: TranslationService) {}

  get image(): string {
    return this.translationService.translate(`${this.heroKey}.image`);
  }

  get imageAlt(): string {
    return this.translationService.translate(`${this.heroKey}.imageAlt`);
  }

  get title(): string {
    return this.translationService.translate(`${this.heroKey}.title`);
  }

  get text(): string {
    return this.translationService.translate(`${this.heroKey}.text`);
  }
}