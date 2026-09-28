import { Component } from '@angular/core';

import { TranslationService } from '../../../services/translation.service';
import { LocationCardComponent } from '../location-card/location-card.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LocationCardComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  constructor(public translationService: TranslationService) {}

  get locationsArray(): any[] {
    return this.translationService.translateArray<any>(
      'locations.items',
    ) || [];
  }
}