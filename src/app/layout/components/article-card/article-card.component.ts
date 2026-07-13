import { Component, Input } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  
  constructor(public translationService: TranslationService) {}

  @Input() card?: any = {};
}