import { Component, Input } from '@angular/core';

import { TranslationService } from '../../../services/translation.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input() card: any = {};

  constructor(
    public translationService: TranslationService,
    private modalService: ModalService,
  ) {}

  openArticle(): void {
    this.modalService.openArticle(this.card);
  }
}