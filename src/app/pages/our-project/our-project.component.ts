import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { NavigationButtonComponent } from '../../layout/components/navigation-button/navigation-button.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { SectionTitleComponent } from '../../layout/components/section-title/section-title.component';
import { SectionDescriptionComponent } from '../../layout/components/section-description/section-description.component';
import { ServiceCardComponent } from '../../layout/components/service-card/service-card.component';
import { TranslationService } from '../../services/translation.service';
import { CardsCarouselComponent } from '../../layout/components/cards-carousel/cards-carousel.component';

@Component({
  selector: 'app-our-project',
  standalone: true,
  imports: [
    MainPhotoComponent,
    NavigationButtonComponent,
    ActionButtonComponent,
    SectionTitleComponent,
    SectionDescriptionComponent,
    ServiceCardComponent,
    CardsCarouselComponent
  ],
  templateUrl: './our-project.component.html',
  styleUrl: './our-project.component.scss'
})
export class OurProjectComponent {

  constructor(public translationService: TranslationService) {}

  get servicesArray(): any[] {
    return this.translationService.translateArray('services.items') || [];
  }

}
