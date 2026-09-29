import { Component, Input } from '@angular/core';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

import { TranslationService } from '../../../services/translation.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-article-extended-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './article-extended-card.component.html',
  styleUrl: './article-extended-card.component.scss',
})
export class ArticleExtendedCardComponent {
  @Input() card: any = {};

  readonly arrowRightIcon = ArrowRight;

  constructor(
    public translationService: TranslationService,
    private modalService: ModalService,
  ) {}

  openArticle(): void {
    this.modalService.openArticle(this.card);
  }
}