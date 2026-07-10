import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-card',
  standalone: true,
  templateUrl: './professional-card.component.html',
  styleUrl: './professional-card.component.scss',
})
export class ProfessionalCardComponent {
  @Input() card: any = {};
}