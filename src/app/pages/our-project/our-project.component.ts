import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { NavigationButtonComponent } from '../../layout/components/navigation-button/navigation-button.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';

@Component({
  selector: 'app-our-project',
  standalone: true,
  imports: [
    MainPhotoComponent,
    NavigationButtonComponent,
    ActionButtonComponent,
  ],
  templateUrl: './our-project.component.html',
  styleUrl: './our-project.component.scss'
})
export class OurProjectComponent {

}
