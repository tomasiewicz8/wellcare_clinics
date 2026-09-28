import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-with-us-card',
  standalone: true,
  imports: [],
  templateUrl: './work-with-us-card.component.html',
  styleUrl: './work-with-us-card.component.scss',
})
export class WorkWithUsCardComponent {
  @Input() card: any = {};
}