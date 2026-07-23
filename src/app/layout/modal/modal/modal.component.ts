import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() closeOnBackdrop = true;

  @Output() modalClose = new EventEmitter<void>();

  constructor(
    public translationService: TranslationService,
  ) {}

  close(): void {
    this.modalClose.emit();
  }

  onBackdropClick(): void {
    if (this.closeOnBackdrop) {
      this.close();
    }
  }

  onPanelClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape')
  onEscapePressed(): void {
    if (this.isOpen) {
      this.close();
    }
  }
}