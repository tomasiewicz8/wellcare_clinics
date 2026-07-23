import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-modal-content',
  standalone: true,
  templateUrl: './article-modal-content.component.html',
  styleUrl: './article-modal-content.component.scss',
})
export class ArticleModalContentComponent {
  @Input() article: any = {};
}