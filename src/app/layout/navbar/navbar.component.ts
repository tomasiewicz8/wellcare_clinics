import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { NavbarMenuButtonComponent } from '../components/navbar-menu-button/navbar-menu-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavbarMenuButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() isMobileMenuOpen = false;
  @Output() menuToggle = new EventEmitter<void>();

  constructor(
    public translationService: TranslationService,
  ) {}

  toggleMobileMenu(): void {
    this.menuToggle.emit();
  }
}