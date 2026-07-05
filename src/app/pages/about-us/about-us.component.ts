import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { NavigationButtonComponent } from '../../layout/components/navigation-button/navigation-button.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    MainPhotoComponent,
    ActionButtonComponent,
    NavigationButtonComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
