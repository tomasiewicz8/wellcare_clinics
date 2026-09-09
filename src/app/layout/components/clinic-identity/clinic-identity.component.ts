import { Component } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { DiagonalCardComponent } from '../diagonal-card/diagonal-card.component';

@Component({
  selector: 'app-clinic-identity',
  standalone: true,
  imports: [
    DiagonalCardComponent,
  ],
  templateUrl: './clinic-identity.component.html',
  styleUrl: './clinic-identity.component.scss',
})
export class ClinicIdentityComponent {
  constructor(
    public translationService: TranslationService,
  ) {}

  get values(): string[] {
    return this.translationService.translateArray<string>(
      'clinicIdentity.values.items',
    );
  }
}