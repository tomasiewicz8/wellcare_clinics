import { Component, Input } from '@angular/core';

import { TranslationService } from '../../../services/translation.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input() card: any = {};

  constructor(
    public translationService: TranslationService,
    private modalService: ModalService,
  ) {}

  openReadMore(): void {
    this.modalService.openArticle(this.card);
  }
}