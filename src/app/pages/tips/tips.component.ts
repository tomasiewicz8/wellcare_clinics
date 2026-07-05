import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [
    MainPhotoComponent,
    ActionButtonComponent,
  ],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.scss'
})
export class TipsComponent {

}
