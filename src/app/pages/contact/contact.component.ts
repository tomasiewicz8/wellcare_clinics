import { Component } from '@angular/core';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ActionButtonComponent,
    MainPhotoComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
