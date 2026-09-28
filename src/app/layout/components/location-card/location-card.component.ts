import { Component, Input } from '@angular/core';

import {
  ChevronRight,
  LucideAngularModule,
  MapPin,
} from 'lucide-angular';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent {
  @Input() location: any = {};
  @Input() phoneLabel = '';
  @Input() mapLinkText = '';

  readonly mapPinIcon = MapPin;
  readonly chevronRightIcon = ChevronRight;
}