import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslationService } from '../../services/translation.service';
import { ModalService } from '../../services/modal.service';

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
  constructor(
    public translationService: TranslationService,
    public modalService: ModalService,
  ) {}

  get isMobileMenuOpen(): boolean {
    return (
      this.modalService.isOpen() &&
      this.modalService.contentType() === 'menu'
    );
  }

  toggleMobileMenu(): void {
    if (this.isMobileMenuOpen) {
      this.modalService.close();
      return;
    }

    this.modalService.openMenu();
  }
}