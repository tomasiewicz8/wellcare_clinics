import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDescriptionComponent } from './section-description.component';

describe('SectionDescriptionComponent', () => {
  let component: SectionDescriptionComponent;
  let fixture: ComponentFixture<SectionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
