import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModalContentComponent } from './menu-modal-content.component';

describe('MenuModalContentComponent', () => {
  let component: MenuModalContentComponent;
  let fixture: ComponentFixture<MenuModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuModalContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
