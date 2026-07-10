import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-cards-carousel',
  standalone: true,
  templateUrl: './cards-carousel.component.html',
  styleUrl: './cards-carousel.component.scss',
})
export class CardsCarouselComponent {
  @Input() columnsMobile?: number;
  @Input() columnsTablet?: number;
  @Input() columnsDesktop?: number;

  @HostBinding('style.--cards-carousel-columns-mobile')
  get mobileColumns(): string | null {
    return this.columnsMobile !== undefined ? String(this.columnsMobile) : null;
  }

  @HostBinding('style.--cards-carousel-columns-tablet')
  get tabletColumns(): string | null {
    return this.columnsTablet !== undefined ? String(this.columnsTablet) : null;
  }

  @HostBinding('style.--cards-carousel-columns-desktop')
  get desktopColumns(): string | null {
    return this.columnsDesktop !== undefined ? String(this.columnsDesktop) : null;
  }
}