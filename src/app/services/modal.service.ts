import { Injectable, signal } from '@angular/core';

export type ModalContentType = 'menu' | 'article' | null;

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen = signal(false);
  contentType = signal<ModalContentType>(null);
  contentData = signal<any>(null);

  openMenu(): void {
    this.contentType.set('menu');
    this.contentData.set(null);
    this.isOpen.set(true);
  }

  openArticle(article: any): void {
    this.contentType.set('article');
    this.contentData.set(article);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    this.contentType.set(null);
    this.contentData.set(null);
  }
}