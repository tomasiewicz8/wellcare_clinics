import { Component } from '@angular/core';

@Component({
  selector: 'app-diagonal-card',
  standalone: true,
  templateUrl: './diagonal-card.component.html',
  styleUrl: './diagonal-card.component.scss',
})
export class DiagonalCardComponent {
  image = 'assets/images/knee.png';
  imageAlt = 'Rodilla';
  title = 'Traumatologia';
  text = 'Tratamientos para lesiones musculares, articulares y procesos de recuperación.';
}