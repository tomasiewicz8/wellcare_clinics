import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExtendedCardComponent } from './article-extended-card.component';

describe('ArticleExtendedCardComponent', () => {
  let component: ArticleExtendedCardComponent;
  let fixture: ComponentFixture<ArticleExtendedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleExtendedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleExtendedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
