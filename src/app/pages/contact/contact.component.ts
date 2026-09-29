import { Component } from '@angular/core';
import { ActionButtonComponent } from '../../layout/components/action-button/action-button.component';
import { MainPhotoComponent } from '../../layout/components/main-photo/main-photo.component';
import { NavigationButtonComponent } from '../../layout/components/navigation-button/navigation-button.component';
import { TranslationService } from '../../services/translation.service';
import { SectionTitleComponent } from '../../layout/components/section-title/section-title.component';
import { SectionDescriptionComponent } from '../../layout/components/section-description/section-description.component';
import { WorkWithUsCardComponent } from '../../layout/components/work-with-us-card/work-with-us-card.component';
import { WorkWithUsComponent } from '../../layout/components/work-with-us/work-with-us.component';
import { SendCvComponent } from '../../layout/components/send-cv/send-cv.component';
import { LocationsComponent } from '../../layout/components/locations/locations.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ActionButtonComponent,
    MainPhotoComponent,
    NavigationButtonComponent,
    SectionTitleComponent,
    SectionDescriptionComponent,
    WorkWithUsComponent,
    SendCvComponent,
    LocationsComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
