import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagonal-card',
  standalone: true,
  templateUrl: './diagonal-card.component.html',
  styleUrl: './diagonal-card.component.scss',
})
export class DiagonalCardComponent {
  @Input() card?: any = {};
}