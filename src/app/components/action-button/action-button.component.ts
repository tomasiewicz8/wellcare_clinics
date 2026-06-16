import { Component } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})

export class ActionButtonComponent {
  destinatario = 'tomasiewic@gmail.com';
  asunto = 'Candidatura para Wellcare Clinics SL';

  mensaje = `Hola,

He visto vuestra web y me gustaría enviaros mi CV para posibles candidaturas en Wellcare Clinics SL.

¡¡¡NO OLVIDES ADJUNTAR TU CURRÍCULUM EN ESTE CORREO!!!`;

  get correoUrl(): string {
    return `mailto:${this.destinatario}?subject=${encodeURIComponent(this.asunto)}&body=${encodeURIComponent(this.mensaje)}`;
  }
}
