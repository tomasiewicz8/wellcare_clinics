import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithUsCardComponent } from './work-with-us-card.component';

describe('WorkWithUsCardComponent', () => {
  let component: WorkWithUsCardComponent;
  let fixture: ComponentFixture<WorkWithUsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkWithUsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkWithUsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
