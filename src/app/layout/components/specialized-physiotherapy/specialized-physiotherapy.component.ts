import { Component } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-specialized-physiotherapy',
  standalone: true,
  imports: [],
  templateUrl: './specialized-physiotherapy.component.html',
  styleUrl: './specialized-physiotherapy.component.scss',
})
export class SpecializedPhysiotherapyComponent {

  constructor(
    public translationService: TranslationService,
  ) {}

  get features(): any[] {
    return this.translationService.translateArray<any>(
      'specializedPhysiotherapy.content.features',
    );
  }
}