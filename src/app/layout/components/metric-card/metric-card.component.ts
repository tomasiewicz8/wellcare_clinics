import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss',
})
export class MetricCardComponent {
  @Input() card: any = {};
}