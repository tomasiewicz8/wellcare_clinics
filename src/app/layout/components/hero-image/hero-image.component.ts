import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.scss',
})
export class HeroImageComponent {
  @Input() imageSrc = '';
  @Input() imageAlt = '';
}