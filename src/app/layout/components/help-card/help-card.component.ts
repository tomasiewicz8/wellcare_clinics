import { Component } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-help-card',
  standalone: true,
  imports: [ActionButtonComponent],
  templateUrl: './help-card.component.html',
  styleUrl: './help-card.component.scss',
})
export class HelpCardComponent {

  constructor(public translationService: TranslationService) {}
}