import { Component } from '@angular/core';

import { ActionButtonComponent } from '../action-button/action-button.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-send-cv',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './send-cv.component.html',
  styleUrl: './send-cv.component.scss',
})
export class SendCvComponent {
  constructor(public translationService: TranslationService) {}

  get sendCvArray(): any[] {
    return this.translationService.translateArray<any>('sendCv.items') || [];
  }
}