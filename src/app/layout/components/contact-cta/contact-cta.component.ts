import { Component } from '@angular/core';

import { ActionButtonComponent } from '../action-button/action-button.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.scss',
})
export class ContactCtaComponent {
  constructor(public translationService: TranslationService) {}
}