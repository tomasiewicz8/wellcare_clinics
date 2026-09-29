import { Component } from '@angular/core';

import { TranslationService } from '../../../services/translation.service';
import { LocationCardComponent } from '../location-card/location-card.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LocationCardComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {

  readonly mapEmbedUrl: SafeResourceUrl;

  constructor(
    public translationService: TranslationService,
    private sanitizer: DomSanitizer,
  ) {
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps/embed/v1/search?key=${environment.googleMapsApiKey}&q=Madrid%2C+Spain`,
    );
  }

  get locationsArray(): any[] {
    return this.translationService.translateArray<any>(
      'locations.items',
    ) || [];
  }
}