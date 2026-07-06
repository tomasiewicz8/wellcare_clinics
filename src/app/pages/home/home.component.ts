import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { NavigationButtonComponent } from '../../layout/components/navigation-button/navigation-button.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { SectionTitleComponent } from '../../layout/components/section-title/section-title.component';
import { DiagonalCardComponent } from '../../layout/components/diagonal-card/diagonal-card.component';
import { CardsCarouselComponent } from '../../layout/components/cards-carousel/cards-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainPhotoComponent,
    ActionButtonComponent,
    SectionTitleComponent,
    DiagonalCardComponent,
    CardsCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
