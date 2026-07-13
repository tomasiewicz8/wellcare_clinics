import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleModalContentComponent } from './article-modal-content.component';

describe('ArticleModalContentComponent', () => {
  let component: ArticleModalContentComponent;
  let fixture: ComponentFixture<ArticleModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleModalContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
