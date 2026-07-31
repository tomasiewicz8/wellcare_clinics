import { Component } from '@angular/core';

import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { SectionTitleComponent } from '../../layout/components/section-title/section-title.component';
import { DiagonalCardComponent } from '../../layout/components/diagonal-card/diagonal-card.component';
import { CardsCarouselComponent } from '../../layout/components/cards-carousel/cards-carousel.component';

import { TranslationService } from '../../services/translation.service';
import { ArticleCardComponent } from '../../layout/components/article-card/article-card.component';
import { SpecializedPhysiotherapyComponent } from '../../layout/components/specialized-physiotherapy/specialized-physiotherapy.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainPhotoComponent,
    ActionButtonComponent,
    SectionTitleComponent,
    DiagonalCardComponent,
    CardsCarouselComponent,
    ArticleCardComponent,
    SpecializedPhysiotherapyComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private translationService: TranslationService) {}

  get treatmentsArray(): any[] {
    return this.translationService.translateArray<any>('treatments.items');
  }

  get articlesArray(): any[] {
    return this.translationService.translateArray<any>('articles.items');
  }

}