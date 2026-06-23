import { Component } from '@angular/core';
import { ActionButtonComponent } from '../../components/action-button/action-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ActionButtonComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
