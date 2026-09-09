import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Globe,
  HeartPulse,
  House,
  LucideAngularModule,
  Mail,
} from 'lucide-angular';
import { ModalService } from '../../../../services/modal.service';
import { TranslationService } from '../../../../services/translation.service';
import { HelpCardComponent } from '../../../components/help-card/help-card.component';

@Component({
  selector: 'app-menu-modal-content',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    HelpCardComponent,
  ],
  templateUrl: './menu-modal-content.component.html',
  styleUrl: './menu-modal-content.component.scss',
})
export class MenuModalContentComponent {
  readonly houseIcon = House;
  readonly buildingIcon = Building2;
  readonly fileTextIcon = FileText;
  readonly heartPulseIcon = HeartPulse;
  readonly mailIcon = Mail;
  readonly globeIcon = Globe;
  readonly briefcaseIcon = BriefcaseBusiness;

  constructor(
    public translationService: TranslationService,
    private modalService: ModalService,
  ) {}

  closeModal(){
    this.modalService.close();
  }
}