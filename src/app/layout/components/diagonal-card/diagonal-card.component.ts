import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagonal-card',
  standalone: true,
  imports: [],
  templateUrl: './diagonal-card.component.html',
  styleUrl: './diagonal-card.component.scss',
})
export class DiagonalCardComponent {
  @Input() card?: any;
  @Input() horizontal = false;
}