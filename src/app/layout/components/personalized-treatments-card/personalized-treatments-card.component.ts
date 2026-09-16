import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personalized-treatments-card',
  standalone: true,
  imports: [],
  templateUrl: './personalized-treatments-card.component.html',
  styleUrl: './personalized-treatments-card.component.scss',
})
export class PersonalizedTreatmentsCardComponent {
  @Input() card: any = {};
}