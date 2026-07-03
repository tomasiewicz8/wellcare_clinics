import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './navbar-menu-button.component.html',
  styleUrl: './navbar-menu-button.component.scss',
})
export class NavbarMenuButtonComponent {
  @Input() isOpen = false;

  @Output() menuToggle = new EventEmitter<void>();

  onClick(): void {
    this.menuToggle.emit();
  }
}