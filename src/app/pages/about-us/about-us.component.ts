import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { NavigationButtonComponent } from '../../layout/components/navigation-button/navigation-button.component';
import { SectionTitleComponent } from '../../layout/components/section-title/section-title.component';
import { ProfessionalCardComponent } from '../../layout/components/professional-card/professional-card.component';
import { TranslationService } from '../../services/translation.service';
import { CardsCarouselComponent } from '../../layout/components/cards-carousel/cards-carousel.component';
import { MetricCardComponent } from '../../layout/components/metric-card/metric-card.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    MainPhotoComponent,
    ActionButtonComponent,
    NavigationButtonComponent,
    SectionTitleComponent,
    ProfessionalCardComponent,
    CardsCarouselComponent,
    MetricCardComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  constructor(private translationService: TranslationService) {}

  get teamArray(): any[] {
    return this.translationService.translateArray<any>('team.items');
  }

  get metricsArray(): any[] {
    return this.translationService.translateArray<any>('metrics.items');
  }

}
