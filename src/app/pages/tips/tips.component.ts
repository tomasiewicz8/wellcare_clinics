import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { ArticlesSectionComponent } from '../../layout/components/articles-section/articles-section.component';
import { SectionTitleComponent } from '../../layout/components/section-title/section-title.component';
import { HelpCardComponent } from '../../layout/components/help-card/help-card.component';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [
    MainPhotoComponent,
    ActionButtonComponent,
    SectionTitleComponent,
    ArticlesSectionComponent,
    HelpCardComponent,
  ],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.scss'
})
export class TipsComponent {

}
