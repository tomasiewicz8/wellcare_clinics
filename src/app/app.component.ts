import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { ModalComponent } from './layout/modal/modal/modal.component';
import { MenuModalContentComponent } from './layout/modal/contents/menu-modal-content/menu-modal-content.component';
import { ArticleModalContentComponent } from './layout/modal/contents/article-modal-content/article-modal-content.component';

import { TranslationService } from './services/translation.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    MenuModalContentComponent,
    ArticleModalContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'wellcare_clinics';

  constructor(
    private translationService: TranslationService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.translationService.loadLanguage('es').subscribe();
  }
}