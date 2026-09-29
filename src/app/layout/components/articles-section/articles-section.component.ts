import { Component } from '@angular/core';

import { DiagonalCardComponent } from '../diagonal-card/diagonal-card.component';
import { TranslationService } from '../../../services/translation.service';
import { ArticleExtendedCardComponent } from '../article-extended-card/article-extended-card.component';

type ArticleFilterType = 'all' | 'Noticia' | 'Consejo' | 'Blog';

@Component({
  selector: 'app-articles-section',
  standalone: true,
  imports: [
    DiagonalCardComponent,
    ArticleExtendedCardComponent,
  ],
  templateUrl: './articles-section.component.html',
  styleUrl: './articles-section.component.scss',
})
export class ArticlesSectionComponent {
  selectedType: ArticleFilterType = 'all';

  readonly filters: { type: ArticleFilterType; textKey: string }[] = [
    { type: 'all', textKey: 'articles.all' },
    { type: 'Noticia', textKey: 'articles.news' },
    { type: 'Consejo', textKey: 'articles.tips' },
    { type: 'Blog', textKey: 'articles.blogs' },
  ];

  constructor(public translationService: TranslationService) {}

  selectType(type: ArticleFilterType): void {
    this.selectedType = type;
  }

  get filteredArticles(): any[] {
    const articles =
      this.translationService.translateArray<any>('articles.items') ?? [];
  
    if (this.selectedType === 'all') {
      return articles;
    }
  
    return articles.filter(article => article.type === this.selectedType);
  }
}