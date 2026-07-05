import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { NavigationButtonComponent } from '../../layout/components/navigation-button/navigation-button.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { SectionTitleComponent } from '../../layout/components/section-title/section-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainPhotoComponent,
    ActionButtonComponent,
    SectionTitleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
