import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCvComponent } from './send-cv.component';

describe('SendCvComponent', () => {
  let component: SendCvComponent;
  let fixture: ComponentFixture<SendCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
