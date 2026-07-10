import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

type TranslationData = Record<string, any>;

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: TranslationData = {};
  private currentLang = 'es';

  constructor(private http: HttpClient) {}

  loadLanguage(lang: string): Observable<TranslationData> {
    this.currentLang = lang;

    return this.http
      .get<TranslationData>(`assets/i18n/${lang}.json`)
      .pipe(
        tap((translations) => {
          this.translations = translations;
        })
      );
  }

  translate(key: string): string {
    const value = key
      .split('.')
      .reduce<any>((current, part) => current?.[part], this.translations);

    return typeof value === 'string' ? value : key;
  }

  translateArray<T = unknown>(key: string): T[] {
    const value = key
      .split('.')
      .reduce<any>((current, part) => current?.[part], this.translations);

    return Array.isArray(value) ? value : [];
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
}