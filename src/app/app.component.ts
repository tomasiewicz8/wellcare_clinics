import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ModalComponent } from './layout/modal/modal/modal.component';
import { MenuModalContentComponent } from './layout/modal/contents/menu-modal-content/menu-modal-content.component';

import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    MenuModalContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'wellcare_clinics';

  isMenuModalOpen = false;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.loadLanguage('es').subscribe();
  }

  toggleMenuModal(): void {
    this.isMenuModalOpen = !this.isMenuModalOpen;
  }

  closeMenuModal(): void {
    this.isMenuModalOpen = false;
  }
}