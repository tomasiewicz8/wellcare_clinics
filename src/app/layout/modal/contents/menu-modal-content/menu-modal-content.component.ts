import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslationService } from '../../../../services/translation.service';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-menu-modal-content',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './menu-modal-content.component.html',
  styleUrl: './menu-modal-content.component.scss',
})
export class MenuModalContentComponent {

  constructor(
    public translationService: TranslationService,
    private modalService: ModalService,
  ) {}
}