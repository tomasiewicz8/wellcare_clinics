import { Component } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-clinic-identity',
  standalone: true,
  imports: [],
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