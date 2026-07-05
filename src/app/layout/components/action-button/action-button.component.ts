import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { TranslationService } from '../../../services/translation.service';

type MailMode = 'contact' | 'cv';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
  @Input() buttonKey = '';

  @Input() mailMode: MailMode = 'contact';

  constructor(public translationService: TranslationService) {}

  get text(): string {
    return this.translationService.translate(this.buttonKey);
  }

  get correoUrl(): string {
    const recipient = this.translationService.translate('mail.recipient');

    if (this.mailMode === 'cv') {
      const subject = this.translationService.translate('mail.cv.subject');
      const body = this.translationService.translate('mail.cv.body');

      return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return `mailto:${recipient}`;
  }
}