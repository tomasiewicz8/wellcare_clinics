import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss',
})
export class NavigationButtonComponent {
  @Input() buttonKey = '';
  @Input() route = '';

  constructor(public translationService: TranslationService) {}

  get text(): string {
    return this.translationService.translate(this.buttonKey);
  }
}