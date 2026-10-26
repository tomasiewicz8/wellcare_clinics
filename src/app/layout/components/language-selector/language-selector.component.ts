import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  isOpen = false;

  constructor(
    public translationService: TranslationService,
    private elementRef: ElementRef<HTMLElement>,
  ) {}

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  @HostListener('keydown.escape', ['$event'])
  onEscape(event: Event): void {
    if (this.isOpen) {
      this.isOpen = false;
      event.stopPropagation();
    }
  }
}