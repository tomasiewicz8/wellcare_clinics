import { Component } from '@angular/core';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';

@Component({
  selector: 'app-our-project',
  standalone: true,
  imports: [
    MainPhotoComponent
  ],
  templateUrl: './our-project.component.html',
  styleUrl: './our-project.component.scss'
})
export class OurProjectComponent {

}
